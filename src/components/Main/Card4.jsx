import React from 'react'
import './card4.css'

import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Card4 = () => {
  return (
    <>
 <div className="col-lg-3 flex-wrap p-0 me-0 mb-0">
                <div className="col-lg flex-wrap ms-1 me-1    pb-0 mb-0 squrecard4">
                    <div className="doublecolumn">
                        <ul>
                            <li className='li1'><FaInstagram /></li>
                            <li className='li2'><CiLinkedin /></li>
                        </ul>
                    </div>
                    <div className='col pb-3 d-block'>
                        <span className='font4 pt-2 pb-0 mb-0 d-block'>STAY WITH ME
                            <span className='d-block fs-4 text-light'>
                             Pofiles
                            </span>
                        </span>
                       
                    </div>
                </div>
            </div>      
    </>
  )
}

export default Card4
