import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CommonButton from "./CommonButton";

export default function OTPPage() {
  const { phone } = useParams();
  const inputs = useRef([]);
  const [isDisable, setIsDisable] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nagivate = useNavigate();
  // Focus next input if current one is filled and is a number
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (isNaN(Number(value))) {
      inputs.current[index].value = "";
      return;
    }
    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
      setCurrentIndex((prev)=> prev+1);
    }
    if (index === 5) {
      setIsDisable((prev) => !prev);
    }
  };
  // Focus previous input when backspace is pressed
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
      setCurrentIndex((prev)=> prev-1);
    }
  };

  // next inputs are not able to focus if previous boxes are not filled
  function handleFocus(index){
    let cnt = 0;
    inputs.current.forEach((input)=>{
      if( input.value.length === 1){
        cnt++;
      }
    })
    if(index > cnt){
      inputs.current[currentIndex].focus();
    }
  }
  return (
    <div className="container otp">
      <div>
        <h3>ENTER THE OTP SENT TO YOUR MOBILE NUMBER</h3>
      </div>
      <div>
        <p>{phone} * * * * *</p>
      </div>
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
      <CommonButton
        onClick={() => nagivate(`/member`)}
        wfull
        isDisabled={isDisable}
      >
        CONTINUE
      </CommonButton>
    </div>
  );
}
