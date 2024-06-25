import React, { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import { useNavigate } from "react-router-dom";
import "react-international-phone/style.css";

import CommonButton from "../components/CommonButton";
import { genrateToken } from "../APIs/genrateToken";
import { genrateOTP } from "../APIs/genrateOTP";
import { getCustomer } from "../APIs/getCustomer";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
export default function MobileNumberPage() {
  const [flag, setFlag] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const nagivate = useNavigate();

  const isValid = isPhoneValid(phone);
  function handleChange(phone, meta) {
    setFlag(false);
    setCode(meta.country.dialCode);
    setPhone(phone);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const phoneNumber = phone.slice(1);

    const reqBody = {
      brand: "SUPARADEMO",
      deviceId: "Suparademo123",
      identifierType: "MOBILE",
      identifierValue: phoneNumber,
    };
    const sessionId = await genrateToken(reqBody);
    const reqBody2 = {
      brand: "SUPARADEMO",
      deviceId: "Suparademo123",
      identifierType: "MOBILE",
      identifierValue: phoneNumber,
      sessionId: sessionId,
    };
    const isOTPGenrated = await genrateOTP(reqBody2);
    if (isOTPGenrated) {
      nagivate(`/otp/${phone.slice(code.length + 1)}/${sessionId}`);
    } else {
      console.log("Failed to genrate OTP");
    }
  }
  return (
    <div className="container mobile">
      <div>
        <h3>HAVE YOU REGISTERED WITH US BEFORE?</h3>
      </div>
      <div>
        <p>Enter your mobile number</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="phone-container">
          <PhoneInput
            defaultCountry="th"
            value={phone}
            onChange={(phone, meta) => handleChange(phone, meta)}
            disableDialCodeAndPrefix={true}
          />
          <p className="code">+{code}</p>
          {isValid && (
            <div style={{ width: "20px" }} className="code tick">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#bb0d2f"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
            </div>
          )}
          {!isValid && (
            <div style={{ color: "red" }}>Phone number is not valid</div>
          )}
          {isValid && flag && (
            <div style={{ color: "red" }}>Already a customer!!!</div>
          )}
        </div>
        <CommonButton wfull isDisabled={!isValid}>
          CONTINUE
        </CommonButton>
      </form>
    </div>
  );
}
