import React, { useState, useRef } from 'react';

const Test = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input if current one is filled
    if (element.value !== "" && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.keyCode === 8 && !otp[index] && index > 0) {
      setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData.getData("text").split("").slice(0, 6);
    setOtp([...data, ...new Array(6 - data.length).fill("")]);
    if (data.length === 6) {
      inputs.current[5].focus();
    } else {
      inputs.current[data.length].focus();
    }
  };

  const handleFocus = (index) => {
    for (let i = 0; i < index; i++) {
      if (otp[i] === "") {
        inputs.current[i].focus();
        return;
      }
    }
  };

  return (
    <div className="otp-container" onPaste={handlePaste}>
      {otp.map((data, index) => (
        <input
          className="otp-input"
          type="text"
          maxLength="1"
          key={index}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          onFocus={() => handleFocus(index)}
          ref={(element) => (inputs.current[index] = element)}
        />
      ))}
    </div>
  );
};



export default Test;
