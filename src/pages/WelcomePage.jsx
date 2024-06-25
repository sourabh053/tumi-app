import React from "react";
import Logo from "/logo.png";

export default function WelcomePage({fullName}) {
  return (
    <div className="container last">
      <div className="img-cont">
        <img src={Logo} alt="Company Logo" />
      </div>
      <div className="h1-cont">
        <h1>WELCOME {fullName}</h1>
        <h1>HOW ARE YOU DOING?</h1>
      </div>
      <div>
        <p>You are a valued TUMI member</p>
      </div>
    </div>
  );
}
