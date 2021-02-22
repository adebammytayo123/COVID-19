import React from 'react';
import './DrawerButtonToggle.css';


const DrawerButtonTogggle = ({toggleClickHandler}) => {
   

        return (
            <div>
                <button className="toggle-btn" onClick={toggleClickHandler}>
                    <div className="toggle-btn-line"></div>
                    <div className="toggle-btn-line"></div>
                    <div className="toggle-btn-line"></div>
                </button>
            </div>
        )
}

export default DrawerButtonTogggle;


