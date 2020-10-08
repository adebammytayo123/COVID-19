import React from 'react';
import "./Contagion.css";
import contact from './contact.jpg';
import disinfecting from './disinfecting.jpg';
import airtransmission from './airtransmission.webp';

const Contagion = () => {
    return (
        <div className="contagion-section" id="contagion">
           <div className="contagion-info">
                <h1 className="contagion-title">contagion</h1>
                <p className="contagion-desc">The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>
            </div>
            <div className="contagion-container">
                <div className="contagion-method">
                    <img className="img1" src={contact} alt="" />
                    <h1 className="title">Human contact</h1>
                    <p className="para">Physical contact with an infected person, therefore washing your hands is the simplest way you can protect yourself.</p>
                </div>
                <div className="contagion-method">
                    <img className="img2" src={disinfecting} alt="" />
                    <h1 className="title">Contaminated Surfaces</h1>
                    <p className="para">Touching contaminated surfaces without disinfecting them first and using the same hands to rub yor face or nose.</p>
                </div>
                <div className="contagion-method">
                    <img className="img3" src={airtransmission} alt="" />
                    <h1 className="title">air transmission</h1>
                    <p className="para">Research shows that the virus can live in the air for up to 3 hours. It can get into your lungs if someone who has it breathes out and you breathe that air in.</p>
                </div>
            </div>
        </div>
    )
}

export default Contagion;
