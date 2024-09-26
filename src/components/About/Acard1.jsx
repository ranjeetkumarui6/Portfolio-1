import React from 'react'
import sign from '../../assets/sign.png'
import imgbanner from '../../assets/img.png'
import { GiPolarStar } from "react-icons/gi";


import './acard1.css'
import Acard6 from './Acard6';
const Acard1 = () => {
  return (
    <>
      <div className="col-xl flex-wrap p-0 pb-0 mb-0">
              <div className="self-summary">
                <GiPolarStar className='star'/>
                <span className='self'> SELF-SUMMARY</span>
                <GiPolarStar className='star'/>
              </div>
              <div className="acard6">
              <Acard6/>
              </div>
               </div>
    </>
  )
}

export default Acard1
