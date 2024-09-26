import React from 'react'
import './acard3.css'
const Acard3 = (props) => {
  return (
    <>
        <div className="col-12  acard3" style={{width:props.w}}>
        <span>{props.exp}</span>
        <h5>{props.blue}</h5>
        <p>{props.date}</p>
        <span>{props.design}</span>
        <p>{props.freelancer}</p>
        <h5>{props.mobile}</h5>
        <p>{props.present}</p>
        <span>{props.designer}</span>
        <h5>{props.diploma}</h5>
        <p>{props.in}</p>
            </div>
    </>
  )
}

export default Acard3
