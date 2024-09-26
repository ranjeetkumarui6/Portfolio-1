import React from 'react'
import Wcard1 from './wcard1'
import Card7 from'../Main/Card7'
import imgbanner from '../../assets/img.png'
import blue from '../../assets/blue.jpg'
import edu from '../../assets/edu.jpg'
import off from '../../assets/off.jpg'
import nisarga from '../../assets/nisarga.jpg'
import uiux from '../../assets/uiux.jpg'
import anime from '../../assets/anime.jpg'
import influe from '../../assets/influe.jpg'
import lead from '../../assets/leadapp.jpg'
import nisargaapp from '../../assets/nisargaapp.jpg'

import animeapp from '../../assets/animeapp.jpg'
import calender from '../../assets/calender.jpg'



import Cbanner from './Cbanner'
import './blog.css'
import Leftcard from './Leftcard'
import Navbar from '../Navbar/Navbar'
const Blog = () => {
  return (
    <>
    <div className="container-fluid">
      <Navbar/>
    <div className="contact-container">
      <div className="acard">
        <Leftcard limgbanner={anime} lshow="OTT WEBSITE" lproject="Anime Go"/> 
        <Leftcard limgbanner={off} lshow="MEETING MANAGEMENT" lproject="OFF Meet"/> 

        </div>
        <div className="bcard">
        <Wcard1 wsummary="SELF-SUMMARY"/>
        <div className="wcard">
        <Cbanner wimgbanner={edu} wshow="LANDING PAGE" wproject="Edu Gorilla"/>
        <Cbanner wimgbanner={blue} wshow="WATER PARK INFORMATION SITE" wproject="Blue Laoon WP"/>
        <Cbanner wimgbanner={uiux} wshow="LMS" wproject="UIUX.LCC"/>
        <Cbanner wimgbanner={nisarga} wshow="E COMMERCE WEBSITE" wproject="Nisarga Fresh"/>
        </div>
        </div>       
      </div>
      <div className="contact-container">
      <div className="acard">
        <Leftcard limgbanner={animeapp} lshow="OTT APP" lproject="Anime Go"/> 
        <Leftcard limgbanner={nisargaapp} lshow="INVENTORY APP" lproject="Nisarga IMS"/> 

        </div>
        <div className="bcard">
        <Wcard1 wsummary="APP PROJECTS"/>
        <div className="wcard">
        <Cbanner wimgbanner={influe} wshow="INFLUENCE DEAL`S APP" wproject="Influe"/>
        <Cbanner wimgbanner={lead} wshow="LEAD APP" wproject="UIUX.LCC"/>
        <Cbanner wimgbanner={calender} wshow="CALENDER APP" wproject="CALENDIUM"/>
        </div>
        </div>  
        <div className="wcard7">
        <Card7/>  
        </div>   
      </div>
      </div>
    
    </>
  )
}

export default Blog
