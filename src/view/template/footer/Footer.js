import React from 'react';
import './style/Footer.scss';
import logoWhite from "../../assets/images/common/logoWhite.png"
import {Link} from "react-router-dom";
function Footer(props) {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id={"Footer"}>
            <div className="detail-wrapper">
                <div className="logo-wrapper">
                    <img className="logo-white" src={logoWhite}/>
                </div>
                <div className="address-wrapper">
                    <div className="row-wrapper">
                        6th floor, 411,
                    </div>
                    <div className="row-wrapper">
                        Bongeunsa-ro,
                    </div>
                    <div className="row-wrapper">
                        Gangnam-gu, Seoul,
                    </div>
                    <div className="row-wrapper">
                        Republic of Korea
                    </div>
                    <div className="row-wrapper margin-top-26">
                        info@eqbr.com
                    </div>
                    <div className="row-wrapper margin-top-26">
                        +82 2 553 2818
                    </div>
                </div>
                <div className="detail-data-wrapper">
                    <div className="title">SITEMAP</div>
                    <div className="site-link-wrapper">
                        <div className="site-link">
                            <Link to={'/'} className='link-style' onClick={() => scrollToTop()}>
                                Why EQBR?
                            </Link>
                        </div>
                        <div className="site-link">Equilibrium</div>
                        <div className="site-link">EQ HUB</div>
                        <div className="site-link">About</div>
                    </div>
                </div>
                <div className="detail-data-wrapper margin-0">
                    <div className="title">SERVICES</div>
                    <div className="site-link-wrapper">
                        <div className="site-link">Whisper</div>
                        <div className="site-link">Volare</div>
                        <div className="site-link">APND</div>
                        <div className="site-link">MyFlex</div>
                    </div>
                </div>
            </div>
            <div className="bottom-wrapper">
                <div className="copyright">
                    © 2022 EQBR All Rights Reserved.
                </div>
                <div className="btn-wrapper">
                    <div className="link-btn">
                        Privacy Policy
                    </div>
                    <div className="link-btn margin-0">
                        Manage Cookies
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
