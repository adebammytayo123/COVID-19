import React from 'react';
import './Prevention.css';
import handwash from './handwash.png';
import socialdistancing from './socialdistancing.jpg';
import wearingmask from './wearingmask.jpg';
import  disinfecting from './disinfecting.jpg'


const Prevention = () => {
    return (
        <div className="prevention-section" id="prevention">
            <div className="prevention-info">
                <h1 className="prevention-title">How do I protect myself ?</h1>
            </div>
            <div className="prevention-method1">
                <h1>1</h1>
                <img src={handwash} alt=""/>
                <div className="prevention-text1">
                    <h2>washing of hands</h2>
                    <p>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
                </div>
            </div>
            <div className="prevention-method2">
                <h1>2</h1>
                <div className="prevention-text2">
                    <h2>social distancing</h2>
                    <p>Avoid close contact with people who are sick.If possible, maintain 6 feet between the person who is sick and other household members.Remember that some people without symptoms may be able to spread virus.Wear a mask when physical distancing is not possible.</p>
                </div>
                <div className="prevention-image2">
                     <img className="img" src={socialdistancing} alt=""/>
                </div>
            </div>
            <div className="prevention-method1">
                <h1>3</h1>
                <img src={wearingmask} alt=""/>
                <div className="prevention-text1">
                    <h2>wearing of masks</h2>
                    <p>You could spread COVID-19 to others even if you do not feel sick.The mask is meant to protect other people in case you are infected.Everyone should wear a mask in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain.</p>
                </div>
            </div>
            <div className="prevention-method2">
                <h1>4</h1>
                <div className="prevention-text2">
                    <h2>clean and disinfect</h2>
                    <p>Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.</p>
                </div>
                <img className="img" src={disinfecting} alt=""/>
            </div>
        </div>
    )
}

export default Prevention
