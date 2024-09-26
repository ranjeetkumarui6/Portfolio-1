import React from 'react'
import './card7.css'
import mypic from '../../assets/logo111.png'
const Card7 = () => {
  return (
    <>
      <div className="footer">
        <img src={mypic} alt="footerlogo" />
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORKS</li>
            <li>CONTACT</li>
        </ul>
        <p>@All Right reserved by<span> @ranjeet kumar</span></p>
      </div>
    </>
  )
}

export default Card7
