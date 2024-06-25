import React from "react";
import { useNavigate } from "react-router-dom";

import CommonButton from "../components/CommonButton";
import Logo from "/logo.png";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="container landing">
      <div>
        <img src={Logo} alt="Company Logo" />
      </div>
      <div>
        <h1>ELEVATE YOUR TRAVEL EXPERIENCE</h1>
      </div>
      <div>
        <p>Become a member and enjoy exclusive perks and benefits</p>
      </div>
      <CommonButton onClick={() => navigate("/mobile")} isDisabled={false}>
        LET'S GET STARTED
      </CommonButton>
    </div>
  );
}
