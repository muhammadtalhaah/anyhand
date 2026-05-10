import React from 'react';
import './Footer.css';
import Logo from '../../Assets/logo.svg'
import Facebook from '../../Assets/Facebook.svg'
import Twitter from '../../Assets/Twitter.svg'
import Linkedin from '../../Assets/Linkedin.svg'
export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="left-section min-w-fit">
            <div className="logo-container">
              <img src={Logo} alt="logo" className='cursor-pointer' />
            </div>
            <div className='flex flex-col gap-3'>
              <div className="social-media-container">
                <img src={Twitter} alt="Social Icon 1" />
                <img src={Facebook} alt="Social Icon 2" />
                <img src={Linkedin} alt="Social Icon 3" />
              </div>
              <p className="w-full text-[#E5E5E5] text-center sm_desktop:text-left">Follow our Social Media</p>
            </div>
          </div>
          <span className='w-full flex items-center justify-center my-8'>
            <hr className='mobile_HR'/>
          </span>
          <div className="right-section">
            <div className="footer-menu flex-1">
              <h2 className="menu-heading">Our Company</h2>
              <p>About Us</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
            <div className="footer-menu flex-1">
              <h2 className="menu-heading">Our Services</h2>
              <p>Plumbing Services</p>
              <p>Electrical Services</p>
              <p>Carpentry Service</p>
              <p>Painting Services</p>
              <p>Home Cleaning</p>
            </div>
            <div className="footer-menu flex-1">
              <h2 className="menu-heading">Get in Touch</h2>
              <p>123 456 7789 10</p>
              <p className='min-w-fit flex-1'>007 popie, New City, USA</p>
            </div>
          </div>
        </div>
        <section className="footer_bottom" style={{ maxWidth: '90vw' }}>
          <hr style={{ width: '90vw' }}/>
          <div className='copyrights sm_desktop:mt-5'>
            <h4>Design by anyhand. All Rights Reserved.</h4>
            <h4>© 2024 anyhandy.com</h4>
          </div>
        </section>
      </footer>
    </>
  )
}



