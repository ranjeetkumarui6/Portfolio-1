import React from 'react'
import './acard.css'
import mypic from '../../assets/mypic.jpg'
const Acard = () => {
    return (
        <>
            <div className="col-lg-4 me-4  flex-wrap amaincol">
                <img src={mypic} alt="mypic" className='amypic' />
            </div>
        </>
    )
}

export default Acard
