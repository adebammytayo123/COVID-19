import React from 'react';
import "./Contagion.css";
import contact from './contact.jpg';
import handshake from './handshake.jpg';
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
                    <h1 className="title">physical contact</h1>
                    <p className="para">A mother to child during pregnancy, labor, or nursing</p>
                </div>
                <div className="contagion-method">
                    <img className="img2" src={handshake} alt="" />
                    <h1 className="title">handshake</h1>
                    <p className="para">Having unprotected vaginal, anal, or oral sex.</p>
                </div>
                <div className="contagion-method">
                    <img className="img3" src={airtransmission} alt="" />
                    <h1 className="title">ait transmission</h1>
                    <p className="para">Using unclean needles and unscreen bloods for patients</p>
                </div>
            </div>
        </div>
    )
}

export default Contagion;
