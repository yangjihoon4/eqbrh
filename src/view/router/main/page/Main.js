import React from 'react';
import './style/Main.scss';
import mainImage1 from "../../../../assets/images/mainImage1.png";
import mainImage2 from "../../../../assets/images/mainImage2.png";
import mainImage3 from "../../../../assets/images/mainImage3.png";
import mainImage4 from "../../../../assets/images/mainImage4.png";
import mainImage5 from "../../../../assets/images/mainImage5.png";
import mainImage6 from "../../../../assets/images/mainImage6.png";
import mainImage7 from "../../../../assets/images/mainImage7.png";
import mainImage8 from "../../../../assets/images/mainImage8.png";
import mainImage9 from "../../../../assets/images/mainImage9.png";
import mainImage10 from "../../../../assets/images/mainImage10.png";

import dotBackground from "../../../../assets/images/dotBackground.png";

function Main(props) {
    return (
        <div id={"Main"}>
            <div className="content-wrapper">
                <div className="content-box-wrapper">
                    <div className="title">
                        <div className="row-wrapper line-height-96">
                            <div className="black-big">Make</div>
                            <div className="blue-big">Anything</div>
                        </div>
                        <div className="row-wrapper line-height-96">
                            <div className="black-big">
                                What You Want
                            </div>
                        </div>
                    </div>
                    <div className="sub-title">
                        <div className="row-text">
                            Don't hesitate to make your own blockchain network.
                        </div>
                        <div className="row-text">
                            Just build it with EQBR
                        </div>
                    </div>
                    <div className="infographic-wrapper">
                        Infographic
                    </div>
                </div>
                <div className="content-box-wrapper">

                </div>
                <div className="content-box-wrapper margin-top-170">
                    <div className="title">
                        <div className="row-wrapper line-height-60">
                            <div className="black-medium">
                                Next Level Blockchain Engine
                            </div>
                        </div>
                        <div className="row-wrapper line-height-60">
                            <div className="blue-medium">
                                Equilibrium
                            </div>
                        </div>
                    </div>
                    <div className="sub-title">
                        <div className="row-text">
                            Numerous blockchain solutions can be developed
                        </div>
                        <div className="row-text">
                            based on an advanced 3rd generation blockchain engine technology</div>
                    </div>
                    <div className="equilibrium-img-wrapper">
                        <img className="equilibrium-img" src={mainImage1}/>
                    </div>
                </div>
                <div className="content-box-wrapper margin-top-220">
                    <div className="title">
                        <div className="row-wrapper line-height-60">
                            <div className="black-medium">
                                One-stop Blockchain Solution
                            </div>
                        </div>
                        <div className="row-wrapper line-height-60">
                            <div className="blue-medium">
                                EQ Hub
                            </div>
                        </div>
                    </div>
                    <div className="learn-more-btn">
                        Learn more
                    </div>
                    <div className="explain-wrapper">
                        <div className="top-img-wrapper">
                            <img className="explain-img" src={mainImage2}/>
                        </div>

                        <div className="for-background">
                            <img className="background-img" src={dotBackground}/>
                        </div>
                        <div className="box-wrapper">
                            <div className="title">
                                BNMS, Blockchain Network
                            </div>
                            <div className="title">Managing Solution</div>
                            <div className="sub-title">
                                Provides tools to easily create
                            </div>
                            <div className="sub-title">
                                blockchain networks and manage nodes.
                            </div>
                            <div className="img-wrapper">
                                <img className="box-img" src={mainImage3}/>
                            </div>
                        </div>
                        <div className="box-wrapper">
                            <div className="title">
                                Contract Library
                            </div>
                            <div className="title">
                                & API Docs
                            </div>
                            <div className="sub-title">
                                Developers can easily deploy smart contracts
                            </div>
                            <div className="sub-title">
                                and build blockchain services.
                            </div>
                            <div className="img-wrapper">
                                <img className="box-img" src={mainImage4}/>
                            </div>
                        </div>
                        <div className="box-wrapper">
                            <div className="title">
                                Wallet and Block Explorer
                            </div>
                            <div className="sub-title">
                                Provides essential functions for
                            </div>
                            <div className="sub-title">
                                building blockchain services.
                            </div>
                            <div className="img-wrapper">
                                <img className="box-img" src={mainImage5}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-box-wrapper">
                    <div className="title">
                    </div>
                </div>
                <div className="content-box-wrapper">
                    <div className="title">
                    <div className="row-wrapper line-height-60">
                        <div className="blue-medium" style={{marginRight:20}}>
                            Powerful Platform
                        </div>
                        <div className="black-medium">
                            to amplify
                        </div>
                    </div>
                    <div className="row-wrapper line-height-60">
                        <div className="black-medium">
                            the value of your business
                        </div>
                    </div>
                    </div>
                    <div className="sub-title">
                        <div className="row-text">
                            EQ Hub offers a wide range of services to support
                        </div>
                        <div className="row-text">
                            developers' efforts to expand their business.
                        </div>
                    </div>
                    <div className="platform-card-wrapper">
                        <div className="card">
                            <img className="card-img" src={mainImage6}/>
                            <div className="card-name">DAPP CENTER</div>
                            <div className="card-description">
                                Developers can easily upload their dAPPs on dAPP Center to create their own blockchain services.
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img" src={mainImage7}/>
                            <div className="card-name">LAUNCHPAD</div>
                            <div className="card-description">
                                Launchpad helps to induce investments from investors by showcasing actual projects that runs on a blockchain network.
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img" src={mainImage8}/>
                            <div className="card-name">AIRDROP</div>
                            <div className="card-description">
                                Airdrops are free coin(or token) giveaway events that are frequently carried out by blockchain service promoters.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-box-wrapper margin-top-200">
                    <div className="card-wrapper first">
                        <img className="card-img" src={mainImage9}/>
                        <div className="detail-wrapper">
                            <div className="blue-title">Super App for Web 3.0</div>
                            <div className="title">Whisper</div>
                            <div className="description">
                                Ultimate secure messenger and wallet based on
                                blockchain technology. Whisper is a key application that makes EQ Hub a Platform. Numorous dAPPs or Projects will be deployed and connected through Whisper.
                            </div>
                            <div className="link-btn">Learn more</div>
                        </div>
                    </div>
                    <div className="card-wrapper reverse">
                        <img className="card-img" src={mainImage10}/>
                        <div className="detail-wrapper">
                            <div className="blue-title">Layer 1, Blockchain Network Project</div>
                            <div className="title">Volare Network</div>
                            <div className="description">
                                Volare Network is the first project to construct
                                a vast ecosystem based on blockchain networks
                                deploying Equilibrium technology. While its ultimate goal is to use the high speed and scalability of Equilibrium to promote the commercial use of blockchain technology across several industries, the Volare Network is first aiming to actively attract highly accessible dApps, in particular blockchain-based games.
                            </div>
                            <div className="link-btn">Learn more</div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="card-img" src={mainImage9}/>
                        <div className="detail-wrapper">
                            <div className="blue-title">NFT Market Place</div>
                            <div className="title">My Flex</div>
                            <div className="description">
                                MyFlex, US-based NFT Startup, delivers a peer-to-peer platform and services for enterprises and consumers which brings value of authenticity through the first commercially viable, decentralized NFT digital marketplace.
                            </div>
                            <div className="link-btn">Learn more</div>
                        </div>
                    </div>
                    <div className="card-wrapper reverse">
                        <img className="card-img" src={mainImage10}/>
                        <div className="detail-wrapper">
                            <div className="blue-title">STO Platfrom</div>
                            <div className="title">
                                <div>A Panda Partners</div>
                                <div>(APND)</div>
                            </div>
                            <div className="description">
                                STO(Security Token Offering) Project in progress
                                with major financial institutions. The Innovative
                                financial service using blockchain technology will
                                be launched within this year after designating of
                                the Financial Regulatory Sandbox in South Korea.
                            </div>
                            <div className="link-btn">Learn more</div>
                        </div>
                    </div>
                </div>
                <div className="content-box-wrapper margin-top-180">
                    <div className="title">Why Hesitate ?</div>
                    <div className="sub-title">
                        Using EQBR's Products and spare your time
                    </div>
                    <div className="btn-wrapper">
                        Get Started
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
