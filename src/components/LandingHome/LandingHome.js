import React from 'react'
import dots from "../../img/dots-01.png"
import logoMuni from "../../img/logomuni-01.png"
import "./LandingHome.css"

const LandingHome = () => {
  return (
    <div className='home-container'>
        <div className='home-text-container'>
            <h1 className='home-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <h2 className='home-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</h2>
            <img src={dots} className='home-dots'/>
        </div>
        <div className='home-img-container'>
            <img src={logoMuni} className="home-logo"/>
        </div>
    </div>
  )
}

export default LandingHome