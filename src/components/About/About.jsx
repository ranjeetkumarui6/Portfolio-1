import React from 'react'
import Card from '../Main/Card'
import Card1 from '../Main/Card1'
import Card2 from '../Main/Card2'
import Card3 from '../Main/Card3'
import Card4 from '../Main/Card4'
import Card5 from '../Main/Card5'
import Card6 from '../Main/Card6'
import Card7 from '../Main/Card7'
import Acard from './Acard'
import Acard1 from './Acard1'
import Acard2 from './Acard2'
import Acard3 from './Acard3'
import Acard4 from './Acard4'
import Navbar from '../Navbar/Navbar'


const About = () => {
  return (
    <>
    <div className="container-fluid">
      <Navbar/>
       <div className="row pb-0 mb-0 maincss">
        <Acard/>
      <Acard1/>
      <Acard2 exp="EXPERIENCE" date="2021-2023" design="Freelancing in Designing and Development" freelancer="on Fever,Upwork,Freelancer" present="March 2023 - Present" designer="UIUX Designer" in="In UIUX.LLC"/>
      <Acard2 exp="EDUCATION" date="2021-2023" design="Bachelor of Computer Application" freelancer="Integral University, Lucknow"/>
      <Acard3 w="98%" exp="Certification" blue="Level Up Your CSS Animation Skills" date="Instructed By: Donovan Hutchinson" mobile="Complete Web & Mobile Designer in 2023: UI/UX, Figma" present="Instructed By: Andrei Neagoie, Daniel Schifano" diploma="Diploma Course in Human Resource Management (HRM)" in="Instructed By: Akaaro Consulting and Training"/>
      <Acard4/>
     <Card7/>
      </div>
      </div>
    </>
  )
}

export default About
