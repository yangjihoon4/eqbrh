import React from 'react';
import './style/Footer.scss';
import logoWhite from "../../assets/images/common/logoWhite.png"
import Footer_Youtube_Icon from '../../assets/images/common/Footer_Youtube_Icon.png'
import Footer_Media_Icon from '../../assets/images/common/Footer_Media_Icon.png'
import {useLocation, useNavigate} from "react-router-dom";

const SITE_MAP = {
    index: 'SITEMAP',
    routes: [
        {
            label: 'Why EQBR?',
            route: '/'
        },
        {
            label: 'Equilibrium',
            route: '/equilibrium'
        },
        {
            label: 'EQ HUB',
            route: '/eq-hub'
        },
        {
            label: 'About',
            route: '/about'
        }
    ]
}

const SERVICES = {
    index: 'SERVICES',
    routes: [
        {
            label: 'Whisper',
            link: '/'
        },
        {
            label: 'Volare',
            link: '/'
        },
        {
            label: 'APND',
            link: '/'
        },
        {
            label: 'MyFlex',
            link: '/'
        }
    ]
}

function Footer(props) {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const openLink = (link) => {
        window.open(`${link}`)
    }

    return (

        <div id='Footer'>
            <div className="footer-top-content-wrapper">
                <div className="company-info-wrapper">
                    <img className="company-logo" src={logoWhite} alt=''/>
                    <div className="company-info">
                        <div className="company-address-info">
                            <div className="company-info-text">6th floor, 411,</div>
                            <div className="company-info-text"> Bongeunsa-ro,</div>
                            <div className="company-info-text"> Gangnam-gu, Seoul,</div>
                            <div className="company-info-text">Republic of Korea</div>
                        </div>
                        <div className="company-email">
                            <a href="mailto:info@eqbr.com" className="company-info-text">info@eqbr.com</a>
                        </div>
                        <div className="company-info-text">+82 2 553 2818</div>
                    </div>
                </div>
                <div className="link-container">
                    <div className="site-map-wrapper">
                        <LinkTab data={SITE_MAP}/>
                    </div>
                    <div className="service-wrapper">
                        <LinkTab data={SERVICES}/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-content-wrapper">
                <div className="footer-bottom-left-content-wrapper">
                    <div className="copyright">
                        <div className="footer-bottom-content-text">© 2022 EQBR All Rights Reserved.</div>
                    </div>
                    <div className="privacy-policy">
                        <div className="footer-bottom-content-text clickable">Privacy Policy</div>
                    </div>
                    <div className="footer-bottom-content-text clickable">Manage Cookies</div>
                </div>
                <div className="footer-bottom-right-content-wrapper">
                    <img className="footer-icon youtube" src={Footer_Youtube_Icon} onClick={() => openLink('https://www.youtube.com/channel/UCwjHVefVkToqi9FfGTlFakw')} alt=''/>
                    <img className="footer-icon media" src={Footer_Media_Icon} onClick={() => openLink('https://medium.com/eqbr')} alt=''/>
                </div>
            </div>
        </div>
    )
        ;
}

export default Footer;

const LinkTab = ({data}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClickLink = (el) => {
        switch(data.index){
            case 'SITEMAP': {
                if(location.pathname === el.route){
                    return window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }else{
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    return navigate(el.route);
                }
            }
            case 'SERVICES': {

            }
            default:
                return null;
        }
    }
    return(
        <div className='link-tab'>
            <div className="link-tab-index">
                {data.index}
            </div>
            <div className="link-tab-link-container">
                {data.routes.map((el,index) => {
                    return(
                        <div className="link" onClick={() => onClickLink(el)}>
                            {el.label}
                        </div>
                    )})}
            </div>
        </div>
    )
}
