import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { validateOTP } from "../APIs/validateOTP";
import { getCustomer } from "../APIs/getCustomer";

import CommonButton from "../components/CommonButton";
import Logo from "/logo.png";

export default function OTPPage({ setFullName }) {
  const { phone } = useParams();
  const inputs = useRef([]);
  const [isDisable, setIsDisable] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  // Focus next input if current one is filled and is a number
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (isNaN(Number(value))) {
      inputs.current[index].value = "";
      return;
    }
    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
      setCurrentIndex((prev) => prev + 1);
    }
    if (index === 5) {
      setIsDisable((prev) => !prev);
    }
  };
  // Focus previous input when backspace is pressed
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // next inputs are not able to focus if previous boxes are not filled
  function handleFocus(index) {
    let cnt = 0;
    inputs.current.forEach((input) => {
      if (input.value.length === 1) {
        cnt++;
      }
    });
    if (index > cnt) {
      inputs.current[currentIndex].focus();
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let otp = "";
    inputs.current.forEach((input) => {
      otp += input.value;
    });
    const sessionId = sessionStorage.getItem("sessionId");
    const reqBody = {
      brand: "SUPARADEMO",
      deviceId: "Suparademo123",
      identifierType: "MOBILE",
      identifierValue: `91${phone}`,
      otp: otp,
      sessionId: sessionId,
    };
    const token = await validateOTP(reqBody);
    const customer = await getCustomer(token, phone);
    console.log(customer);
    if (customer) {
      setFullName(customer[0].firstname + " " + customer[0].lastname);
      navigate(`/welcome`);
    } else {
      sessionStorage.setItem("token", token);
      navigate(`/member/${phone}`);
    }
  }
  return (
    <div className="container otp">
       <div>
        <img src={Logo} alt="Company Logo" />
      </div>
      <div>
        <h3>ENTER THE OTP SENT TO YOUR MOBILE NUMBER</h3>
      </div>
      <div>
        <p>{phone.slice(0, 5)} * * * * *</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="otp-container">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="tel"
                maxLength="1"
                className="otp-input"
                ref={(el) => (inputs.current[index] = el)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => handleFocus(index)}
                autoFocus={index === 0}
              />
            ))}
        </div>
        <CommonButton wfull isDisabled={isDisable}>
          CONTINUE
        </CommonButton>
      </form>
    </div>
  );
}
