import React from 'react'
import './acard4.css'
import Card4 from '../Main/Card4'
import Card6 from '../Main/Card6'
import sign from '../../assets/sign.png'

const Acard4 = () => {
  return (
    <>
       <div className="col  acard4">
        <Card4/>
        <Card6/>
        <div className="  justify-content-between d-flex flex-wrap asqure">
                <div className="col me-2  asqurecard">
                    <img src={sign} alt="imgsign" className='asign'/>
                    <div className='col mb-0 d-inline'>
                    <span className='afont1 pt-2 pb-3 mb-0 d-block'>MORE ABOUTE ME 
                    <span className='d-block fs-4 text-light'>
                    Credentials
                         </span>
                         </span> 
                    </div>
                </div>
                </div>
                </div>
    </>
  )
}

export default Acard4
