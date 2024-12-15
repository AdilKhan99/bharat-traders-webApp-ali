import React from 'react'
import './styling/ContactUs.css'
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from './images/tracking.png'
import img2 from './images/customer-service.png'
import img3 from './images/correct.png'
import img4 from './images/gmail.png'
import img7 from './images/finallogo4.jpeg'


function ContactUs() {
  return (
    //section 1
    <>
    <Navbar/>
      {/* <h1>this is the contact us page.</h1> */}
      <div className='part1'>

        <div className='part1x'>
           <img src={img7} alt="" id='logo2'/>
        </div>
        <div className='part1y'><br /><br /><br />
         <h1 className="sectionTitle">
        Bharat Traders is the leading distribution house of 
        India established in 1991 by our beloved founder 
        Md Hasnain.
        </h1>
        <br />
        <br />
        <p className='sectionTitle2'>We have established ourselves as one of the renowned
             manufacturers, wholesalers, suppliers, importers and 
             traders of quality food ingredients and raw materials.</p>   
        </div>

      </div>


    {/* section 2 */}
      <div className='part2'>

          <div className='part2a'>
            <div className='icon1'>
                <img src={img1} alt="" id='location' />
            </div>
            <div className='address'>
            <h1 className="sectionTitle3">Address</h1>
            <p>Station Road, Anwarpur, Hajipur, Vaishali, Bihar. (844101) </p>
            </div> 
          </div>

          <div className='part2b'>
            <div className='icon2'>
                <img src={img2} alt="" id='helping'/>
            </div>
            <div className='call'>
            <h1 className="sectionTitle3">Call us</h1>
            <p>For Product Enquiry/- 9430484174
                <br />
            For Product Enquiry/- 7979938275
            <br />
            For Order and Technical Support/- 9955676868</p>
            </div>
          </div>

          <div className='part2c'>
            <div className='icon3'>
                <img src={img3} alt="" id='timming' />
            </div>
            <div className='open'>
            <h1 className="sectionTitle3">Open</h1>
            <p>Monday - Sunday: 8am - 8pm
                <br />
               Friday : 8am - 12:30pm and 1:30pm - 8pm</p>
               </div>
          </div>

          <div className='part2d'>
            <div className='icon4'>
                <img src={img4} alt="" id='gmail'/>
            </div>
            <div className='email'>
            <h1 className="sectionTitle3">Emails</h1>
            <p>adilmd498@gmail.com</p>
            </div>
          </div>
      </div>

      {/* Section 3 - Map */}
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57522.46226393531!2d85.14514765820313!3d25.699328300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5da6bdb57525%3A0x231edb19ebd03cef!2sBharat%20Traders!5e0!3m2!1sen!2sin!4v1731505343729!5m2!1sen!2sin"   
      allowFullScreen loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>

      <Footer/>
    </>
  )
}

export default ContactUs
