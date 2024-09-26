import React from 'react'
import sign from '../../assets/sign.png'
import doc from '../../assets/doc.png'
import { PiLinktreeLogo } from "react-icons/pi";
import './card2.css'
const Card2 = () => {
    return (
        <>
            <div className="col-sm-3 flex-wrap p-0 me-2 mb-0">
                <div className=" flex-wrap ms-1 me-1    pb-0 mb-0 squrecard2">
                    <img src={doc} alt="document pic" className='sign2' /><br />
                    <div className='col pb-3 d-block'>
                        <span className='font2 pt-4 pb-0 mb-0 d-block'>CV
                            <span className='d-block fs-4 text-light'>
                             <a href='/'>   Downloads</a>
                            </span>
                        </span>
                        {/* <span style={{ position: "relative", left: "10.5rem", top: "-4.5rem" }} className=' pt-0 mt-0 pb-0 mb-0 font2 d-inline text-light text-center'>
                            <i className=' fs-1 direction mt-0 pt-0'> <PiLinktreeLogo /></i>
                        </span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2
