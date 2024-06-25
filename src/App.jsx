import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MobileNumberPage from "./pages/MobileNumberPage";
import OTPPage from "./pages/OTPPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import LastPage from "./pages/LastPage";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState('');
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobileNumberPage />} />
        <Route path="/otp/:phone/:sessionId" element={<OTPPage setFullName={setFullName}/>} />
        <Route path="/member/:phone" element={<MemberDetailsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/last" element={<LastPage />} />
        <Route path="/welcome" element={<WelcomePage fullName={fullName}/>} />
        <Route path="*" element={<h1>Route Not Found!!</h1>} />
      </Routes>
    </>
  );
}

export default App;
