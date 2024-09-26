import React from 'react'
import Card6 from '../Main/Card6'
import icon2 from '../../assets/icon2.png'
import ContactInfo from './ContactInfo'
import './contact.css'
import Card7 from '../Main/Card7'
import Navbar from '../Navbar/Navbar'
const Contact = () => {
  return (
    <>
    <div className="container-fluid">
      <Navbar/>
    <div className="contact-container">
    <ContactInfo/>
    <div className="contact-container-1">
      <Card6 icon2={icon2} lets="Let`s" h="This field is required." work="Work" together="Together" p="5px 20px 20px 20px" in={<input type='text' placeholder={"Name*"} className='contact-input'></input>} Email={<input type='text' placeholder={"Email*"} className='contact-input2'></input>} subject={<input type='text' placeholder={"Subject*"} className='contact-input2'></input>} txt={<textarea rows={6} placeholder={"Your Message*"} className='contact-input2'></textarea>} button={<button className='Bt'>Send Message</button>}/>
      </div>
      </div>
      <div className="row d-flex flex-wrap contact-footercss">
      <Card7/>
      </div>
    </div>

    </>
  )
}

export default Contact
