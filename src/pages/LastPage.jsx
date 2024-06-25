import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "/logo.png";

export default function LastPage() {
  const navigate = useNavigate();
  return (
    <div className="container last">
      <div className="img-cont">
        <img src={Logo} alt="Company Logo" onClick={()=>navigate('/')}/>
      </div>
      <div className="h1-cont">
        <h1>SUCCESS!</h1>
        <h1>THANK YOU FOR SIGHING UP WITH US</h1>
      </div>
      <div>
        <p>You are now a valued TUMI member</p>
      </div>
    </div>
  );
}
