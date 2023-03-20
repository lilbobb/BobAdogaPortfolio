import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <footer>
        <FaTwitter /> <FaLinkedin /> <FaFacebook /> <FaInstagram />
        <p>BobTechⒸ2023 All rights researved</p>
      </footer>
    </div>
  );
};

export default footer;
