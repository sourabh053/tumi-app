import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMember } from "../APIs/createMember";

export default function MemberDetailsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // Form validation here

    const formData = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender
    };
    // console.log(formData);

    createMember(formData)
    .then(response => {
      if(response === undefined) throw new Error("Request Failed");
      console.log("Member created successfully:", response);
      navigate(`/privacy`);
    })
    .catch(error => {
      console.error("Error creating member:", error);
    });
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
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="LAST NAME"
            className="form-input"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="date"
            placeholder="DOB"
            className="form-input"
            value={dob}
            onChange={(e)=>setDob(e.target.value)}
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
