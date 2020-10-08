import React from 'react';
import './Symptoms.css';
import symptoms from './symptoms.jpg'

const Symptoms = () => {
    return (
        <div className="symptoms-section" id="symptoms">
            <div className="symptoms-info">
                <h1 className="symptoms-title">Symptoms</h1>
                <p className="symptoms-desc">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                <div className="symptoms-list">
                    <div className="most-common">
                        <h3>Most Common</h3>
                        <ul>
                         <li>Fever</li>
                         <li>Dry cough</li>
                         <li>Tiredness </li>
                        </ul>
                    </div>
                    <div className="less-common">
                    <h3>Less Common</h3>
                        <ul>
                            <li>Aches and pains</li>
                            <li>Sore throat</li>
                            <li>Diarrhoea</li>
                            <li>Conjunctivitis</li>
                            <li>Headache</li>
                            <li>Loss of taste or smell</li>
                            <li>A rash on skin, or discolouration of fingers or toes</li>
                        </ul>
                    </div>
               </div>
            </div>
            <div className="symptoms-image">
                <img src={symptoms} alt=""/>
            </div>
        </div>
    )
}

export default Symptoms
