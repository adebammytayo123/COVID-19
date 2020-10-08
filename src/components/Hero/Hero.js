import React from 'react';
import './Hero.css';
import socialDistancing from './socialDistancing.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-info">
             <h1 className="hero-title">COVID-19 Awareness</h1>
             <h3 className="hero-sub-title">Social distancing reduces the spread of coronavirus.</h3>
             <p className="hero-desc">There is no specific treatment yet for the  coronavirus disease(COVID-19).The best way to curb  transmission and  reduce it spread, is to be well informed on how it spreads.</p>
             <button className="help-button">
               <a href="https://covid19.ncdc.gov.ng/contact/">we can help</a>
             </button>
           </div>
           <div className="hero-image">
             <img src={socialDistancing} alt="" />
           </div>
        </div>
    )
}

export default Hero
