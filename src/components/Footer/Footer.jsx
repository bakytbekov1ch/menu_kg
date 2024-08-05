import React from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__mx">
            <MdOutlinePhoneInTalk />
            <a href="tel +996507111669">+996507111669</a>
          </div>
          <div className="footer__mx">
            <FaWhatsapp />
            <a href="tel +996507111669">+996507111669</a>
          </div>
        </div>
      </div>
      <p>https://Chunkurchak.kg</p>
    </div>
  );
}

export default Footer;
