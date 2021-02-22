import React, { useState} from 'react';
import "./Header.css"
import covid from './covid.png';
import { Link } from "react-scroll";
import DrawerButtonTogggle from '../SideDrawer/DrawerButtonTogggle';



const Header = ()  =>{

    const [toggleContent, setToggleContent] = useState(false)

        return (
            <div className="sticky">
                <nav className="nav">
                    <div className="nav-heading">
                    <div>
                        <DrawerButtonTogggle toggleClickHandler={()=> setToggleContent(!toggleContent)} />
                    </div>
                    <a href="#heading" className="nav-titles">
                      <img className="nav-image" src={covid} alt="" />
                      <h1 className="nav-title">COVID-19</h1>
                    </a>
                   </div>
                    <div className="spacer" />
                    <ul className="nav-links">
                    <li>
                        <Link
                            activeClass="active"
                            to="overview"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Overview</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="contagion"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Contagion</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="symptoms"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Symptoms</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="prevention"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Prevention</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="dashboard"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Dashboard</Link>
                        </li>
                        <li className="contact">
                            <a href="https://covid19.ncdc.gov.ng/contact/">contact</a>
                        </li>
                    </ul>
                    {toggleContent ? ( <ul className="nav-mobile-links">
                        <li>
                        <Link
                            activeClass="active"
                            to="overview"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={500}
                        >Overview</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="contagion"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={500}
                        >Contagion</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="symptoms"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={500}
                        >Symptoms</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="prevention"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={500}
                        >Prevention</Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="dashboard"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={500}
                        >Dashboard</Link>
                        </li>
                    </ul>) :null}
                </nav>
            </div>
        )
    }

export default Header
