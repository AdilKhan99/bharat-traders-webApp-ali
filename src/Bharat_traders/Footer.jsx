import React from "react";
import "./styling/Footer.css";
import a from './images/finalcirclelogo.png'
let x = "#backToTop"


function Footer() {
  
  return (
    <div>
      <footer className="footer">
        {/* Bharat Traders footer */}
        <div >
          <button class="foot-panel1"><a href="#backToTop"> Back to Top</a>  </button>
           
          {/* backTotop is a id present in the navbar.jsx there to there we are calling */}
        </div>

        <div class="foot-panel2">  
          <ul>
            <p className="para">Get to Know Us</p>
            <a href="/About" >About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Bharat Traders Science</a>
          </ul>

          <ul>
            <p className="para">Connect with Us</p>
            <a href="/ContactUs">Address</a>
            <a href="/ContactUs">Contact Us</a>
            <a href="https://wa.me/qr/2DAGKMCFFOXUA1">whatsApp</a>
            <a href="https://www.facebook.com/profile.php?id=100006334573495&mibextid=LQQJ4d">Facebook</a>
            <a>Twitter X</a>
            <a href="https://www.instagram.com/invites/contact/?igsh=fzqj6789fgjv&utm_content=2se99lb">Instagram</a>
            <a>YouTube</a>
            <a>Threads</a>
            <a>Linkdin</a>
          </ul>

          <ul className="desktop-res">
            <p className="para">Make Money with Us</p>
            <a>Sell on Bharat Traders</a>
            <a>Sell under Bharat Traders Accelerator</a>
            <a>Protect and Build Your Brand</a>
            <a>Bharat Traders Global Selling</a>
            <a>Become an Affiliate</a>
            <a>Fulfilment by Bharat Traders</a>
            <a>Advertise Your Products</a>
            <a>Bharat Pay on Merchants</a>
          </ul>

          <ul className="desktop-res">
            <p className="para">Let Us Help You</p>
            <a>ACOVID-19 and Bharat Traders</a>
            <a>Your Account</a>
            <a>Returns Centre</a>
            <a>100% Purchase Protection</a>
            <a>Bharat Traders App Download</a>
            <a>Help</a>
          </ul>
        </div>

        <div class="foot-panel3">
          <div class="logo-last"> <img src={a} alt="" /> </div>
          <div><h1 id="headingStyle">Trusted House of Food Raw Material's</h1>
          </div> 
        </div>

        <div class="footer-panel5">
          <center>
            <p class="panel5">
              Conditions of Use & Sale Privacy Notice Interest-Based Ads
            </p>
            <p class="panel5">
              © 1991-2024, BharatTraders.com, Inc. or its affiliates
            </p>
          </center>
        </div>

        <div className="footer-content">
          <p>© 2024 Bharat Traders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
