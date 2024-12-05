// import React from 'react'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Navbar from './Navbar'
// import Home from './Home'
// import About from './About'
// import IceCream from './IceCream'
// import Bakery from './Bakery'
// import Sweets from './Sweets'
// import Milk from './Milk'
// import ContactUs from './ContactUs'
// import Footer from './Footer';
// import Cart from './Cart'
// import CreateAccount from './CreateAccount'
// import Login from './Login'
// import Verification from './Verification'
// import TermsAndPrivacy from './TermsAndPrivacy'

// function Path() {
//   return (
//     <div>
//       <BrowserRouter>
//     {/* <Navbar/> */}
//       <Routes>
//         <Route element={<Home/>} path="/"></Route>
//         <Route element={<About/>} path="/About"></Route>
//         <Route element={<IceCream/>} path="/IceCream"></Route>
//         <Route element={<Bakery/>} path="/Bakery"></Route>
//         <Route element={<Sweets/>} path="/Sweets"></Route>
//         <Route element={<Milk/>} path="/Milk"></Route>
//         <Route element={<Cart/>} path="/Cart"></Route>
//         <Route element={<ContactUs/>} path="/ContactUs"></Route>

//         <Route element={<CreateAccount/>} path="/CreateAccount"></Route>
//         <Route element={<Login/>} path="/Login"></Route>
//         <Route element={<Verification/>} path="/Verification"></Route>

//         <Route element={<TermsAndPrivacy/>} path="/TermsAndPrivacy"></Route>
        
//       </Routes>
//       {/* <Footer /> */}
//       </BrowserRouter>
//     </div>
//   )
// }

// export default Path





import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import IceCream from './IceCream'
import Bakery from './Bakery'
import Sweets from './Sweets'
import Milk from './Milk'
import ContactUs from './ContactUs'
import Cart from './Cart'
import CartAssigned from './CartAssigned'
import CreateAccount from './CreateAccount'
import Login from './Login'
import Verification from './Verification'
import TermsAndPrivacy from './TermsAndPrivacy'

function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/About" />
          <Route element={<IceCream />} path="/IceCream" />
          <Route element={<Bakery />} path="/Bakery" />
          <Route element={<Sweets />} path="/Sweets" />
          <Route element={<Milk />} path="/Milk" />
          <Route element={<Cart />} path="/Cart" />
          <Route element={<CartAssigned />} path="/CartAssigned" />
          {/* <Route element={<Cart/>} path="/CartAssigned" /> */}
          <Route element={<ContactUs />} path="/ContactUs" />
          <Route element={<CreateAccount />} path="/CreateAccount" />
          <Route element={<Login />} path="/Login" />
          <Route element={<Verification />} path="/Verification" />
          <Route element={<TermsAndPrivacy />} path="/TermsAndPrivacy" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path

