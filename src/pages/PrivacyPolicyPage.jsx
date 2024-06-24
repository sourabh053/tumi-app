import React from "react";
import { useNavigate } from "react-router-dom";

import CommonButton from "../components/CommonButton";

export default function PrivacyPolicyPage() {
  const nagivate = useNavigate();
  return (
    <div className="container privacy-container">
      <h2>PRIVACY POLICY</h2>
      <div className="privacy-content">
        <p>
          At Valiram, we value your privacy and strive to protect your personal
          data in compliance with the governing laws of the countries we operate
          in.
        </p>
        <p>
          Our Privacy Policy has been drafted out to help you understand how
          Valiram collects, records, manages, uses, stores, transfers and
          discloses your personal data. As an organization, we strive to
          maintain the highest standards of data security and privacy, always
          adhering to the laws of each country we operate in.
        </p>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our privacy practices or for other legal, operational or regulatory
          reasons. If we amend this Privacy Policy, we will revise the “last
          updated” date located at the top of this Privacy Policy.
        </p>
        <p>
          By agreeing to this privacy policy, we (and our service providers, on
          our behalf) may use the information we collect from and about you for
          a variety of purposes, including the following:
        </p>
        <ul>
          <li>
            To fulfil your requests for products and services and to keep you
            updated about your orders
          </li>
          <li>
            Keeping you informed (either via post, telephone, email or SMS
            service) about our new stores, products, services, upcoming events,
            or promotions
          </li>
          <li>To facilitate your participation in any contests or events</li>
          <li>Where appropriate for market research</li>
          <li>
            Affiliate marketing initiatives with partners or third-party service
            provides related to Valiram
          </li>
        </ul>
      </div>
      <CommonButton is100 isDisabled={false} onClick={() => nagivate("/last")}>
        I AGREE
      </CommonButton>
    </div>
  );
}
