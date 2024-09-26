import React from 'react'
import { GiPolarStar } from "react-icons/gi";
import './wcard1.css'
const Wcard1 = (props) => {
  return (
    <>
      <div className="col-xl flex-wrap p-0 pb-0 mb-0">
              <div className="wself-summary">
                <GiPolarStar className='wstar'/>
                <span className='wself'>{props.wsummary}</span>
                <GiPolarStar className='wstar'/>
              </div>
               </div> 
    </>
  )
}

export default Wcard1;
