import React from 'react';
import { Link } from '@mui/material';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../css/footer.css'
const Footer: React.FC = () => {
  return (
    <footer className=" footer container-fluid">
      <div className="container">
        <div className="row justify-content-between">
          <div className="lead col-6 col-lg-auto py-3 py-sm-0 p-sm-3 p-lg-4 box3 text-center">
            <h4>Stay Connected</h4>
            <h2>
              <Link href="https://www.youtube.com/lonelyplanet" color="inherit">
                <FaYoutube />
              </Link>
              <Link href="https://www.instagram.com/lonelyplanet" color="inherit">
                <FaInstagram />
              </Link>
              <Link href="https://www.facebook.com/lonelyplanet" color="inherit">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com/lonelyplanet" color="inherit">
                <FaTwitter />
              </Link>
            </h2>
          </div>
          <div className="lead col-auto p-3 p-lg-4 box1">
            <h3> ©  Michal krispin 2023.<br /> All rights reserved. </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
