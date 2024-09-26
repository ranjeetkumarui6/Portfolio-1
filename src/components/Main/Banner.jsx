import React from 'react'

const Banner = (props) => {
  return (
    <>
       <div className="col-sm d-flex flex-wrap ms-3  pb-0 mb-0 squrecard">
                <img src={props.imgbanner} alt="imgsign" className='sign'/>
                <div className='col mb-0 d-inline'>
                    <span className='font1 pt-2 pb-3 mb-0 d-block'>{props.show} 
                    <span className='d-block fs-4 text-light'>
                    {props.project}
                         </span>
                         </span> 
                    </div>
                </div>
    </>
  )
}

export default Banner
