import React, {useEffect, useState} from 'react';
import './style/EqHub.scss'
import EQHub_section1_Image from '../../../assets/images/eqHub/EQHub_Section1_Image.png'
import {EqHubSection2CardData, EqHubSection3TabData, EqHubSection4CardData} from "./style/EqHubData";
import EQHub_Section3_Add from '../../../assets/images/eqHub/EQHub_Section3_Add_Icon.png'
import EQHub_Section3_Hide from '../../../assets/images/eqHub/EQHub_Section3_Hide_Icon.png'
import Button from "../../../atom/button/Button";

function EqHub(props) {
    const [selectedToolInfo, setSelectedToolInfo] = useState('network')


    return (
        <div id='EqHub'>
            <div className="eqhub-section1">
                <div className="eqhub-section1-text-wrapper">
                    <div className="eqhub-section1-text-title">
                        <span className='text-title'>All Takes Is</span>
                        <span className='gradient-text text-title'>One Click</span>
                    </div>
                    <div className="eqhub-section1-text-sub-title">
                        <span className='text-description'>Simple, Fast, Stable, Easy and Done.</span>
                    </div>
                </div>
                <img className='eqhub-section1-image' src={EQHub_section1_Image} alt=""/>
            </div>
            <div className="eqhub-section2">
                <div className="eqhub-section2-card-container">
                    {EqHubSection2CardData.map((el, index) => {
                        return (
                            <EqHubSection2Card data={el}  key={index}/>
                        )
                    })}
                </div>
            </div>
            <div className="eqhub-section3">
                <div className="eqhub-section3-title">
                    <span className='text-40'><span className='gradient-text'>A Complete Tool</span> for</span>
                    <span className='text-40'>Blockchain Platform Creation</span>
                </div>
                <EQHubSection3Tab selectedTool={selectedToolInfo} setSelectedTool={setSelectedToolInfo}/>
            </div>
            <div className="eqhub-section4">
                <div className="eqhub-section4-title">
                    <span className='text-40'>Various<span className='gradient-text'> Examples</span></span>
                </div>
                <div className="eqhub-section4-example-container">
                    {EqHubSection4CardData.map(((el, index) => {
                        return (
                            <EQHubSection4Card data={el} key={index}/>
                        )
                    }))}
                </div>
            </div>
            <div className="eqhub-section5">
                <div className="eqhub-section5-title">
                    <span className='text-40'>All Heroes Need Sidekicks</span>
                </div>
                <div className="eqhub-section5-sub-title">
                    <span className='text-18'>Let’s check your helpful equipments and solutions.</span>
                </div>
                <Button className='main-button large-button default' style={{cursor: 'default'}}>Get Started</Button>
            </div>
        </div>
    );
}

export default EqHub;

const EqHubSection2Card = ({data}) => {
    //TODO: 서버에서 받아오는 데이터를 렌더링 할 예정입니다. 임시데이터 입니다.
    return (
        <div className='eqhub-section2-card'>
            <div className="eqhub-section2-card-amount">
                <span className='gradient-text text-54'>{data.amount}</span>
            </div>
            <div className="eqhub-section2-card-decription">
                <span className='fs-16 fw-500'>{data.description}</span>
            </div>
        </div>
    )
}

const EQHubSection3Tab = ({selectedTool, setSelectedTool}) => {
    const [selectedToolSource, setSelectedToolSource] = useState(null);

    useEffect(() => {
        setSelectedToolSource(EqHubSection3TabData.find(data => selectedTool === data.tool)?.source)
    },[selectedTool])
    return (
        <div className='eqhub-section3-tab'>
            <div className="eqhub-section3-tab-toggle-container">
                {EqHubSection3TabData.map((el, index) => {
                    return (
                        <div className={`eqhub-section3-tab-toggle ${selectedTool === el.tool ? 'selected' : ''}`} onClick={() => setSelectedTool(el.tool)} key={index}>
                            <div className={`eqhub-section3-tab-toggle-left-wrapper ${selectedTool === el.tool ? 'selected' : ''}`}>
                                <img className='eqhub-section3-tab-toggle-icon' src={selectedTool === el.tool ? el.iconWhite : el.iconBlack} alt=""/>
                                <div className={`eqhub-section3-tab-toggle-text-wrapper ${selectedTool === el.tool ? 'selected' : ''}`}>
                                    <div className={`eqhub-section3-tab-toggle-title ${selectedTool === el.tool ? 'selected' : ''}`}>
                                        <span className='fs-18 fw-600'>{el.title}</span>
                                    </div>
                                    {selectedTool === el.tool &&
                                        <div className="eqhub-section3-tab-toggle-description">
                                            <span className='fs-14 fw-400'>{el.description}</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            <img className='eqhub-section3-tab-toggle-action-icon' src={selectedTool === el.tool ? EQHub_Section3_Hide : EQHub_Section3_Add} alt=""/>
                        </div>
                    ) 
                })}
            </div>
            <div className="eqhub-section3-tab-source-container">
                <img className='eqhub-section3-tab-source' src={selectedToolSource} alt=""/>
            </div>
        </div>
    )
}

const EQHubSection4Card = ({data}) => {
    const openLink = (link) => {
        if(Boolean(link)){
            window.open(`${link}`)
        }
    }
    return (
        <div className='eqhub-section4-card'>
            <img className='eqhub-section4-card-image' src={data.image} alt="" onClick={() => openLink(data.link)} style={{cursor: Boolean(data.link) ? 'pointer' : 'default'}}/>
        </div>
    )
}