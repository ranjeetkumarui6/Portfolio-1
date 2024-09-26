import React from 'react'
import './navbar.css';
import logo from '../../assets/logo12.png'
import { Link } from 'react-router-dom';
const Navbar = () => {


    const changenav1=()=>{
        document.getElementById("ids1").style.color="white"
    }
    const changenav2=()=>{
        document.getElementById("ids2").style.color="white"
    }
    const changenav3=()=>{
        document.getElementById("ids3").style.color="white"
    }
    const changenav4=()=>{
        document.getElementById("ids4").style.color="white"
    }
  return (
    <>
      <div className="container-fluid ">

    <div className="row navrow">
        <div className="header ">
            <nav>
        <div className="col-md-4 d-flex flex-nowrap col1">
            <img src={logo} alt="logoimg" className='logoimg' />
        </div>
        <div className="col-md-4 co-sm-4 flex-wrap   col2">
            <ul>
               <Link to="/"><li className='li1'> <a href="#" onClick={changenav1} id="ids1">Home</a></li></Link> 
               <Link to="/about"><li className='li2'> <a href="#" onClick={changenav2} id="ids2">About</a></li></Link> 
               <Link to="/contact"><li className='li2'> <a href="#" onClick={changenav3} id="ids3">Contact</a></li></Link> 
                <Link to="/works"><li className='li2'> <a href="#" onClick={changenav4} id="ids4">Works</a></li></Link>
            </ul>
        </div>
        <div className="col-xl-4  flex-wrap col3">
            <button className='navbutton'>Let`s Talk</button>
        </div>
        </nav>
        </div>
    </div>    
    </div>      

    </>
  )
}

export default Navbar;
