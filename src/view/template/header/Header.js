import React from 'react';
import './style/Header.scss';
import logo from "../../assets/images/common/logo.png"
function Header(props) {
    return (
        <div id={"Header"}>
            <div className="logo-content-wrapper">
                <div className="logo-wrapper">
                    <img className="logo-img" src={logo}/>
                </div>
                <div className="btn-link-wrapper">
                    <div className="link-btn no-margin">Equilibrium</div>
                    <div className="link-btn">EQ Hub</div>
                    <div className="link-btn">About</div>
                    <div className="link-blue-btn">Get started</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
