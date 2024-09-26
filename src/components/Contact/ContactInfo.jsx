import React from 'react'
import './contactinfo.css'
import { TfiEmail } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <>
       <div className="col  contact-card1">
                <span className='span-info'>CONTACT INFO</span>
                <div className="message">
                    <div className="message-icon">
                    <TfiEmail className='allicon'/>
                    </div>
                    <div className="message-content">
                        <span>MAIL US</span>
                        <p>ranjeetkumar78734@gmail.com
                        support@ranjeet.com</p>
                    </div>
                </div>
                <div className="message">
                    <div className="message-icon">
                    <SiWhatsapp className='allicon'/>
                    </div>
                    <div className="message-content">
                        <span>CONTACT US</span>
                        <p>+91 6393792577</p>
                    </div>
                </div>
                <div className="message">
                    <div className="message-icon">
                    <CiLocationOn className='allicon'/>
                    </div>
                    <div className="message-content">
                        <span>LOCATION</span>
                        <p>Khargaora, Unnao ,Lucknow
                        Uttar Pradesh (INDIA)</p>
                    </div>
                </div>
                <span className='span-info'>SOCIAL INFO</span>
                <div className="social-icons">
                    <div className="social-icon1">
                    <FaLinkedin className='allicon1' />
                    </div>
                    <div className="social-icon1">
                    <FaInstagram  className='allicon1'/>
                    </div>
                    <div className="social-icon1">
                    <FaTwitter className='allicon1' />
                    </div>
                </div>
            </div>

    </>
  )
}

export default ContactInfo
