import React from "react";
import "./index.scss";
function Footer() {
  return (
    <div id="footer">
      <div className="dev">
        <div className="up">
          <div className="title">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
                alt=""
              />
            </div>
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="box">
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Offers & Discounts</p>
            <p>Get Coupon</p>
            <p>Contact Us</p>
          </div>
          <div className="box">
            <h4>New Products</h4>
            <p>Woman Cloth</p>
            <p>Fashion Accessories</p>
            <p>Man Accessories</p>
            <p>Rubber made Toys</p>
          </div>
          <div className="box">
            <h4>Support</h4>
            <p>Frequently Asked Questions</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Report a Payment Issue</p>
          </div>
        </div>
        <div className="down">
          <div className="left">
            <p>
              Copyright ©2024 All rights reserved | This template is made with
              by Colorlib
            </p>
          </div>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
