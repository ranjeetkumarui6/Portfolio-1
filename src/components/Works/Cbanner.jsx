import React from 'react'
import './cbanner.css'
const Cbanner = (props) => {
  return (
    <>
            <div className=" d-flex flex-wrap ms-3  pb-0  csqurecard">
                <img src={props.wimgbanner} alt="imgsign" className='csign'/>
                <div className=' mb-0 d-inline'>
                    <span className='cfont1 pt-2 pb-3 mb-0 d-block'>{props.wshow} 
                    <span className='d-block fs-4 text-light'>
                    {props.wproject}
                         </span>
                         </span> 
                    </div>
                </div> 

    </>
  )
}

export default Cbanner
