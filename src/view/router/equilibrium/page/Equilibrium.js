import React from 'react';
import './style/Equilibrium.scss'
import Equilibrium_Section1_Image from '../../../assets/images/equilibrium/Equilibrium_Sectiojn1_Image.png'
import Equilibrium_Section4_Image from '../../../assets/images/equilibrium/Equilibrium_Sectiojn4_Image.png'
import {EquilibriumData, StrengthOfEQData} from "./EquilibriumData";

function Equilibrium(props) {
    return (
        <div id='Equilibrium'>
            <div className="equilibrium-section1">
                <div className="section1-text-wrapper">
                    <div className="section1-text-title">
                        <div className='gradient-text text-title'>Next Level</div>
                        <div className='text-title'>Blockchain</div>
                    </div>
                    <div className="section1-text-sub-title">
                        <div className='text-description'>Power Shift, From Platform Economy</div>
                        <div className='text-description'>To P2P Economy</div>
                    </div>
                </div>
                <div className="section1-image-wrapper">
                    <img className='section1-image' src={Equilibrium_Section1_Image} alt=""/>
                </div>
            </div>
            <div className="equilibrium-section2">
                {EquilibriumData.map((el, index) => {
                    return (
                        <GradientInformation data={el} key={index}/>
                    )
                })}
            </div>
            <div className="equilibrium-section3">
                <div className="section3-title">
                    <span className='text-40'>
                        Strength of <span className='gradient-text'>EQUILIBRIUM</span>
                    </span>
                </div>
                <div className="strength-of-eq-card-container">
                    {StrengthOfEQData.map((el, index) => {
                        return (
                            <StrengthOfEQCard data={el} key={index}/>
                        )
                    })}
                </div>
            </div>
            <div className="equilibrium-section4">
                <span className='section4-title text-40'>
                    <span className='gradient-text'>Continuous</span> Improvement
                </span>
                <img className='section4-image' src={Equilibrium_Section4_Image} alt=""/>
                <div className="section4-description">
                    <span>Participates in <span
                        style={{color: '#282828'}}>government-led development project</span></span>
                    <div>‘Blockchain Technology for Data-driven Economy’,</div>
                    <span>which aims to <span style={{color: '#282828'}}>advance consensus algorithm.</span></span>
                </div>
            </div>
            <div className="equilibrium-section5">
                <div className='text-40' style={{marginBottom: 24}}>
                    <div>Let's Build Your Own</div>
                    <div>Blockchain Network</div>
                </div>
                <div className='section5-sub-title'>
                    <div> By just One-click, You can Create</div>
                    <div> Simple, Faster and Easy.</div>
                </div>
                <div className="button-container">
                    <button className='main-button button1'>Go to EQ Hub</button>
                </div>
            </div>
        </div>
    );
}

export default Equilibrium;

const GradientInformation = ({data}) => {
    return (
        <div className='gradient-info'>
            <div className="gradient-info-data-wrapper">
                <div className="gradient-info-data">
                    <div className='gradient-text text-64'>{data.data}</div>
                </div>
                <div className="gradient-info-unit">
                    <div className='text-20'>{data.unit}</div>
                </div>
            </div>
            <div className="gradient-info-description">
                <div className='text-16 text-gray'>{data.description}</div>
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