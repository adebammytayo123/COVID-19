import React from 'react';
import './Overview.css';
import  virus from './virus.jpg'

const Overview = () => {
    return (
        <div className="overview-section" id="overview">
            <div className="image-container">
            <img className="image" src={virus} alt=""/>
            </div>
            <div className="overview-info">
                <h1 className="overview-title">what is covid-19 ?</h1>
                <h3 className="overview-sub-title">coronavirus</h3>
                <p className="overview-desc">
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered viral disease.Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                </p>
                <button className="learn-more-button">
                  <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">learn more</a>
                </button>
            </div>
        </div>
    )
}

export default Overview;
