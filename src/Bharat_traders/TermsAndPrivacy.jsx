import React from 'react'
import './styling/TermsAndPrivacy.css'

function TermsAndPrivacy() {
  return (
    <>
       <div className="terms-container">
      <h1 className="terms-title">Conditions of Use</h1>
      <p>Welcome to Bharat Trader. By accessing or using our website, mobile application, or purchasing our products, you agree to the following terms and conditions:</p>

      <h2>1. Nature of Products</h2>
      <ul>
        <li>We specialize in food items such as ice creams, sweets, bakery raw materials, and other perishable goods.</li>
        <li>Due to the nature of our products, <strong>we do not offer returns, refunds, or exchanges under any circumstances.</strong></li>
      </ul>

      <h2>2. Delivery Policy</h2>
      <ul>
        <li>We deliver only within <strong>Bihar</strong> and restrict our services to a <strong>100 km range from Hajipur</strong>.</li>
        <li>All deliveries are subject to a shipping charge, which will be communicated at the time of order placement.</li>
      </ul>

      <h2>3. Order Requirements</h2>
      <ul>
        <li>The minimum order value must be ₹1,00,000 or higher. Orders below this amount will not be accepted.</li>
      </ul>

      <h2>4. Order Confirmation</h2>
      <ul>
        <li>Orders are confirmed only after full payment is received.</li>
        <li>Once an order is placed, it cannot be canceled due to the short shelf life of our products.</li>
      </ul>

      <h2>5. Storage and Handling</h2>
      <ul>
        <li>Customers are responsible for following proper storage and handling instructions provided with the product.</li>
        <li>Any deterioration due to improper handling post-delivery will not be covered by Bharat Trader.</li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <ul>
        <li>Bharat Trader is not liable for any indirect or consequential damages arising from the use or misuse of our products.</li>
        <li>In cases of disputes, our maximum liability is limited to the original purchase value.</li>
      </ul>

      <div className="privacy-section">
        <h1 className="terms-title">Privacy Notice</h1>
        <p>Bharat Trader values your privacy. This notice outlines how we collect, use, and protect your personal information:</p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>We may collect your name, address, phone number, email address, and payment details when you place an order.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders.</li>
          <li>To communicate updates regarding your order status or promotions (if you’ve opted in).</li>
          <li>To improve our services and website functionality.</li>
        </ul>

        <h2>3. Data Protection</h2>
        <ul>
          <li>We implement strict measures to protect your personal information from unauthorized access.</li>
          <li>Payment information is securely processed through trusted third-party payment gateways.</li>
        </ul>

        <h2>4. Sharing of Information</h2>
        <ul>
          <li>We do not sell, trade, or share your personal information with third parties, except as necessary for order fulfillment (e.g., delivery partners).</li>
        </ul>

        <h2>5. Cookies and Tracking</h2>
        <ul>
          <li>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</li>
        </ul>

        <h2>6. Changes to Privacy Notice</h2>
        <ul>
          <li>Bharat Trader reserves the right to update this Privacy Notice at any time. Any changes will be posted on our website.</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default TermsAndPrivacy
