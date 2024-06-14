import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import MobileNumberPage from "./components/MobileNumberPage";
import OTPPage from "./components/OTPPage";
import MemberDetailsPage from "./components/MemberDetailsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import LastPage from "./components/LastPage";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobileNumberPage />} />
        <Route path="/otp/:phone" element={<OTPPage />} />
        <Route path="/member" element={<MemberDetailsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/last" element={<LastPage />} />
        <Route path="*" element={<h1>Route Not Found!!</h1>} />
      </Routes>
      {/* <Test /> */}
    </>
  );
}

export default App;
