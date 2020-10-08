import React, {Component} from 'react';
import './DrawerButtonToggle.css';


class DrawerButtonTogggle extends Component {

    drawerToggleClick = () => {
        this.props.toggleClickHandler();
    }
   

    render() {
        return (
            <div>
                <button className="toggle-btn" onClick={this.drawerToggleClick}>
                    <div className="toggle-btn-line"></div>
                    <div className="toggle-btn-line"></div>
                    <div className="toggle-btn-line"></div>
                </button>
            </div>
        )
    }
}

export default DrawerButtonTogggle;


