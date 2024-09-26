import React from 'react'
import './card.css'
import mypic from '../../assets/mypic.jpg'
import { PiLinktreeLogo } from "react-icons/pi";
const Card = () => {
    return (
        <>
            <div className="col-sm me-4  flex-wrap maincol">
                        <img src={mypic} alt="mypic" className='mypic' />
                    <div className="col-sm-6 flex-nowrap content">
                        <p className='text-secondary mb-0 pb-0'>Web Developer</p>
                        <span className='text-info pt-0 mt-0 fs-1'>Er.</span>
                        <h1 className='text-info'>   Ranjeet Kumar</h1>
                        <p className='para mb-0 pb-0 '>I am  a Mern Stack Developer based in india</p>
                        <span className='para'></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <i className=' fs-1 direction'> <PiLinktreeLogo /></i>

                    </div>
            </div>
            


        </>
    )
}

export default Card
