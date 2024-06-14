import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberDetailsPage() {
  const [gender, setGender] = useState("male");
  const nagivate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    nagivate(`/privacy`);
  }
  return (
    <div className="container form-container">
      <h2>BECOMING A MEMBER IS EASY</h2>
      <p>Tell us your name</p>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="LAST NAME"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="date"
            placeholder="DOB"
            className="form-input"
            required
          />
          <div className="form-input gender-toggle">
            <span
              className={`gender-option ${gender === "male" ? "selected" : ""}`}
              onClick={() => setGender("male")}
            >
              MALE
            </span>
            <span
              className={`gender-option ${
                gender === "female" ? "selected" : ""
              }`}
              onClick={() => setGender("female")}
            >
              FEMALE
            </span>
          </div>
        </div>
        <button type="submit" className="form-button">
          CONTINUE
        </button>
      </form>
    </div>
  );
}
