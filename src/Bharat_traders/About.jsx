import React from 'react'
import './styling/about.css';
import Navbar from './Navbar';
import Footer from './Footer';
// import img1 from './images/papa.png'
import a from './images/icecream2.jpg'


function About() {  
  return (
    <>
     <Navbar/>
      <h1>this is the about page</h1>
      <div className='aboutmain'>
         {/* <div id='factory'> <img src={a} alt="" /> </div> */}

        <div className='aboutp1'>
        <h1 id='about'>About Us</h1>
         <p id='paragraph'>
         Bharat Traders is the leading distribution house of India established in 1991
         by our beloved founder  Md Hasnain. We have established ourselves as one
         of the renowned wholesalers, suppliers, importers and traders of quality food
         ingredients and raw materials.

        Through the innovative and brilliant leadership of our management, we are
        constantly transforming the food and bakery industry with the selection of
        superior and high-quality raw materials, adoption of modern scientific
        manufacturing methods and hassle-free trade system all over India.

        Md Hasnain being the owner of the company is involved since inception.
        He has an experience of around 32 years, having knowledge of Indian and
        International business. His core strengths is sales and marketing with a vision
        to expand business internationally.
         </p>
         </div>
        <div className='aboutp2'></div>
        </div>


        <div className='aboutmain2'>
          <div className='aboutp3'></div>
          <div className='aboutp4'>
            <h1 id='vision'>Vision</h1>
            <p id='paragraph2'>Our vision is to be a globally recognized import company that prioritizes quality, service, and value. Our commitment to quality ensures that every product we trade meets rigorous criteria, guaranteeing reliability and excellence. By prioritizing exceptional service, we foster strong, long-lasting relationships with our clients, built on trust and mutual respect. We strive to create value not only through competitive pricing and efficient logistics but also by understanding and anticipating the diverse needs of the global market.

            Our employees are integral to our success, and we are dedicated to providing a supportive and rewarding work environment that encourages growth and innovation. We believe that by investing in our people, we can achieve excellence and drive our mission forward.we aim to deliver consistent and sustainable returns, operating with transparency and integrity.

            In a rapidly evolving global marketplace, we are committed to continuous improvement, leveraging technology and industry expertise to stay ahead of trends and meet the changing demands of our customers. Our goal is to set the standard for excellence in the import-export industry, delivering unmatched quality, service, and value.</p>

          </div>

        </div>




        <Footer/>
    </>
  )
}

export default About
