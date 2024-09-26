import React from 'react'
import './leftcard.css'
const Leftcard = (props) => {
  return (
    <>
        <div className="col-md d-flex flex-wrap ms-3  pb-0 mb-0 lsqurecard">
                <img src={props.limgbanner} alt="imgsign" className='lsign'/>
                <div className=' mb-0 d-inline'>
                    <span className='lfont1 pt-2 pb-3 mb-0 d-block'>{props.lshow} 
                    <span className='d-block fs-4 text-light'>
                    {props.lproject}
                         </span>
                         </span> 
                    </div>
                </div> 

    </>
  )
}

export default Leftcard
