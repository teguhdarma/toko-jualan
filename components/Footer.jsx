import React from 'react';
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 teguh toko all rights reserved </p>
      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
