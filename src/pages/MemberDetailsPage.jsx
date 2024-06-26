import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createMember } from "../APIs/createMember";

import Logo from "/logo.png";

export default function MemberDetailsPage() {
  const { phone } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    // const formData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   dob: dob,
    //   gender: gender,
    // };
    // console.log(formData);
    const reqBody = {
      root: {
        customer: [
          {
            mobile: `91${phone}`,
            firstname: firstName,
            lastname: lastName,
            email: `${firstName}.${lastName}@capillarytech.com`,
            extended_fields: {
              field: [
                {
                  name: "dob",
                  value: dob,
                },
                {
                  name: "gender",
                  value: gender,
                },
              ],
            },
            custom_fields: {
              field: [
                {
                  name: "state",
                  value: "Himachal Pardesh",
                },
                {
                  name: "title",
                  value: "Mr",
                },
              ],
            },
          },
        ],
      },
    };
    const token = sessionStorage.getItem("token");
    const data = await createMember(reqBody, token, phone);
    if (data) {
      sessionStorage.clear();
      navigate("/privacy");
    }
  }
  return (
    <div className="container form-container">
      <div>
        <img src={Logo} alt="Company Logo" />
      </div>
      <h2>BECOMING A MEMBER IS EASY</h2>
      <p>Tell us your name</p>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="form-input"
            value={firstName}
            onChange={(e) => {
              const newValue = e.target.value;
              if (/^[a-zA-Z]*$/.test(newValue)) {
                setFirstName(newValue);
              }
            }}
            required
          />
          <input
            type="text"
            placeholder="LAST NAME"
            className="form-input"
            value={lastName}
            onChange={(e) => {
              const newValue = e.target.value;
              if (/^[a-zA-Z]*$/.test(newValue)) {
                setLastName(newValue);
              }
            }}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="date"
            placeholder="DOB"
            className="form-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <label className="form-input gender-toggle">
            <input
              type="checkbox"
              name="gender"
              id="genderToggle"
              checked={gender === "male"}
              onChange={() => {}}
            />
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
          </label>
        </div>
        <button type="submit" className="form-button">
          CONTINUE
        </button>
      </form>
    </div>
  );
}
