import React from 'react'
import './main.css'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import Card7 from './Card7'
import icon2 from '../../assets/icon2.png'
import Navbar from '../Navbar/Navbar'

const Main = () => {
  return (
    <>
    <div className="container-fluid">
      <Navbar/>
    <div className="row pb-0 mb-0 maincss">
      <Card/>
      <Card1/>
      </div>
      <div className="row maincss1">
      <Card2 />
      <Card3/>
      <Card4/>
      </div>
      <div className="container">
      <div className="row d-flex flex-wrap maicss2">
      <Card5/>
      <Card6 icon2={icon2} lets="Let`s" work="Work" together="together" space=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
      </div>
      </div>
      <div className="container">
      <div className="row d-flex flex-wrap footercss">
      <Card7/>
      </div>
      </div>
    </div>

    </>
  )
}

export default Main
