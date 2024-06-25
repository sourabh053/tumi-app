import React from "react";
import Logo from "/logo.png";
import { useNavigate } from "react-router-dom";

export default function WelcomePage({fullName}) {
  const navigate = useNavigate();
  return (
    <div className="container last">
      <div className="img-cont">
        <img src={Logo} alt="Company Logo" onClick={()=>navigate("/")}/>
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
