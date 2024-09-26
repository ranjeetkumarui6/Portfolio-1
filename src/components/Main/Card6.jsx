import React from 'react'
import './card6.css'
import icon2 from '../../assets/icon2.png'
const Card6 = (props) => {
    return (
        <>
            <div className="col-md  card66" >
                <div className=" row logo2  ">
                    <img src={props.icon2} alt="icon2" className='icon2' />
                </div>
                <div className=" row heading" style={{padding:props.p}}>
                      <p className='text-light p1 pb-0 mb-0 '>  {props.lets}{props.space}
                      <span className='p2'>  <span className='text-light pt-0 mt-0  '>{props.work}</span>
                      <span className='text-info '>{props.together}</span></span>
                      </p>
                   <div className="contact-form">
                    <div className="in">
                        {props.in}
                        <h6>{props.h}</h6>
                    </div>
                    <div className="in">
                        {props.Email}
                    </div>
                    <div className="in">
                        {props.subject}
                    </div>
                    <div className="in">
                        {props.txt}
                    </div>
                    <div className="in">
                        {props.button}
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Card6
