import React from 'react'
import logoMuni from "../../img/logomuni-01.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo-container'>
            <img src={logoMuni}/>
        </div>
    </div>
  )
}

export default Footer