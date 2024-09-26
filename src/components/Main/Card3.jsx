import React from 'react'
import './card3.css'
import { PiLinktreeLogo } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";
import { TbDeviceTabletCode } from "react-icons/tb";


const Card3 = () => {
  return (
    <>
      <div className="col-xl-5 me-3 ms-3 ps-5 pe-5  flex-wrap maincol2">
        <ul>
          <li><FaCamera /></li>
          <li><IoPricetags /></li>
          <li><BsBarChartLineFill /></li>
          <li><TbDeviceTabletCode /></li>
        </ul>

        <div className="col-sm text-start flex-nowrap content2">
        </div>
        <span className='font2 pt-4 pb-0 mb-0 d-block'>SPECIALIZATION
          <span className='d-block fs-4 text-light'>
              Services Offering
          </span>
        </span>
      </div>


    </>
  )
}

export default Card3
