
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/home';
import Laptops from './pages/laptops';
import Navbar from './components/navbar';
import Phones from './pages/phones';
import CartPage from './pages/CartPage';
import { CartProvider } from './pages/CartContext';
import ComingSoon from './pages/comingsoon';
import About from './pages/about';
import Contact from './pages/contact';
import Breadcrumb from './components/breadcumb';
import HeadPhones from './pages/headphones';
import Watches from './pages/watch';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
function App() {

  return (
    <>
     <CookieConsent
        location="bottom"
        buttonText="I accept"
        cookieName="yourCookieName"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={0.02}
      >
        This website uses cookies to enhance the user experience.
        {/* console.log(getCookieConsentValue("your_custom_cookie_name")); */}
      </CookieConsent>
     <CartProvider>
      
      
      <BrowserRouter>
      
            <Routes>
                <Route path="/" element={<ComingSoon />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/laptop" element={<Laptops />} />
                <Route path="/phone" element={<Phones />} />
                <Route path="/headphone" element={<HeadPhones />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/watch' element={<Watches />} />
            </Routes>
          </BrowserRouter>
          </CartProvider>
          
    </>
   
  )
}

export default App
