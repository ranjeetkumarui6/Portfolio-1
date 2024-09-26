import React from 'react'
import './card1.css'
import sign from '../../assets/ranjeet (3).jpg'
import { PiLinktreeLogo } from "react-icons/pi";
import Banner from './Banner.jsx';
import imgbanner from '../../assets/img.png'

const Card1 = () => {
    return (
        <>
        <div className="col-xl flex-wrap p-0 pb-0 mb-0">
              <div className="marquee">
                <marquee behavior="" direction="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quae?</marquee>
              </div>
               <div className="col-sm  justify-content-between d-flex flex-wrap squre">
                <div className="col me-2  squrecard">
                    <img src={sign} alt="imgsign" className='sign'/>
                    <div className='col mb-0 d-inline'>
                    <span className='font1 pt-2 pb-3 mb-0 d-block'>MORE ABOUTE ME 
                    <span className='d-block fs-4 text-light'>
                    Credentials
                         </span>
                         </span> 
                         {/* <span style={{position:"relative",left:"10.5rem", top:"-4.5rem"}} className=' pt-0 mt-0 pb-0 mb-0 font2 d-inline text-light text-center'>
                    <i className=' fs-1 direction mt-0 pt-0'> <PiLinktreeLogo /></i>
                    </span> */}
                    </div>
                </div>
               <Banner imgbanner={imgbanner} show="SHOWCASE" project="Projects"/>
               </div>
               </div>

        </>
    )
}

export default Card1
