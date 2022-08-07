import React from 'react';
import './style/Equilibrium.scss'
import Equilibrium_Section1_Image from '../../../assets/images/equilibrium/Equilibrium_Sectiojn1_Image.png'
import Equilibrium_Section4_Image from '../../../assets/images/equilibrium/Equilibrium_Sectiojn4_Image.png'
import {EquilibriumData, StrengthOfEQData} from "./EquilibriumData";
import Button from "../../../atom/button/Button";

function Equilibrium(props) {
    return (
        <div id='Equilibrium'>
            <div className="equilibrium-section1">
                <div className="equilibrium-section1-text-wrapper">
                    <div className="equilibrium-section1-text-title-wrapper">
                        <div className='equilibrium-section1-text-title'>Next Level</div>
                        <div className='equilibrium-section1-text-title gradient-text'>Blockchain</div>
                    </div>
                    <div className="equilibrium-section1-text-sub-title-wrapper">
                        <div className='equilibrium-section1-text-sub-title'>
                            {'Power Shift, From Platform Economy\n' +
                                'To P2P Economy'}
                        </div>
                    </div>
                </div>
                <img className='equilibrium-section1-image' src={Equilibrium_Section1_Image} alt=""/>
            </div>
            <div className="equilibrium-section2">
                {EquilibriumData.map((el, index) => {
                    return (
                        <GradientInformation data={el} key={index}/>
                    )
                })}
            </div>
            <div className="equilibrium-section3">
                <div className='equilibrium-section3-title'>
                    Strength of <span className='gradient-text'>EQUILIBRIUM</span>
                </div>
                <div className="equilibrium-section3-card-container">
                    {StrengthOfEQData.map((el, index) => {
                        return (
                            <StrengthOfEQCard data={el} key={index}/>
                        )
                    })}
                </div>
            </div>
            <div className="equilibrium-section4">
                <span className='equilibrium-section4-title text-40'>
                    <span className='gradient-text'>Continuous</span> Improvement
                </span>
                <img className='equilibrium-section4-image' src={Equilibrium_Section4_Image} alt=""/>
                <div className="equilibrium-section4-description">
                    <span>Participates in <span
                        style={{color: '#282828'}}>government-led development project</span></span>
                    <div>‘Blockchain Technology for Data-driven Economy’,</div>
                    <span>which aims to <span style={{color: '#282828'}}>advance consensus algorithm.</span></span>
                </div>
            </div>
            <div className="equilibrium-section5">
                <div className='equilibrium-section5-title-wrapper'>
                    <div className='equilibrium-section5-title'>Let's Build Your Own</div>
                    <div className='equilibrium-section5-title'>Blockchain Network</div>
                </div>
                <div className='equilibrium-section5-sub-title-wrapper'>
                    <div className='equilibrium-section5-sub-title'> By just One-click, You can Create</div>
                    <div className='equilibrium-section5-sub-title'> Simple, Faster and Easy.</div>
                </div>
                <Button className='main-button large-button default'>Go to EQ Hub</Button>
            </div>
        </div>
    );
}

export default Equilibrium;

const GradientInformation = ({data}) => {
    return (
        <div className='gradient-info'>
            <div className="gradient-info-data-wrapper">
                <div className='gradient-text gradient-info-data'>{data.data}</div>
                <div className='gradient-info-unit'>{data.unit}</div>
            </div>
            <div className="gradient-info-description">
                {data.description}
            </div>
        </div>
    )
}

const StrengthOfEQCard = ({data}) => {
    return (
        <div className='strength-of-eq-card'>
            <img className="strength-of-eq-image" src={data.image}/>
            <div className="divide-line"/>
            <div className="strength-of-eq-text-wrapper">
                <div className="strength-of-eq-title">
                    {data.title}
                </div>
                <div className="strength-of-eq-sub-title">
                    {data.subTitle}

                </div>
                <div className="strength-of-eq-description">
                    {data.description}
                </div>
            </div>
        </div>
    )
}