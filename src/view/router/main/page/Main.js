import React from "react";
import "./style/Main.scss";
import mainImage1 from "../../../assets/images/main/mainImage1.png";
import mainImage2 from "../../../assets/images/main/mainImage2.png";
import mainImage3 from "../../../assets/images/main/mainImage3.png";
import mainImage4 from "../../../assets/images/main/mainImage4.png";
import mainImage5 from "../../../assets/images/main/mainImage5.png";
import mainImage6 from "../../../assets/images/main/mainImage6.png";
import mainImage7 from "../../../assets/images/main/mainImage7.png";
import mainImage8 from "../../../assets/images/main/mainImage8.png";
import mainImage9 from "../../../assets/images/main/mainImage9.png";
import mainImage10 from "../../../assets/images/main/mainImage10.png";
import mainImage11 from "../../../assets/images/main/mainImage11.png";
import mainImage12 from "../../../assets/images/main/mainImage12.png";
import dotBackground from "../../../assets/images/main/dotBackground.png";
import volareIcon from "../../../assets/images/main/volare_icon.png";
import twitterIcon from "../../../assets/images/main/twitter_icon.png";
import whisperIcon from "../../../assets/images/main/whisper_icon.png";
import mediumIcon from "../../../assets/images/main/medium_icon.png";
import appstoreIcon from "../../../assets/images/main/app_store_icon.png";
import googlestoreIcon from "../../../assets/images/main/google_store_icon.png";

import mainVideo from "../../../assets/video/mainVideo.mp4";
import { Link, useNavigate } from "react-router-dom";

const BUSINESS_SERVICE_LIST = [
  {
    id: 1,
    label: "DAPP CENTER",
    description: "Developers can easily upload their dAPPs on dAPP Center to create their own blockchain services.",
    img: mainImage6,
    link: "",
  },
  {
    id: 2,
    label: "LAUNCHPAD",
    description: "Launchpad helps to induce investments from investors by showcasing actual projects that runs on a blockchain network.",
    img: mainImage7,
    link: "",
  },
  {
    id: 3,
    label: "AIRDROP",
    description: "Airdrops are free coin(or token) giveaway events that are frequently carried out by blockchain service promoters.",
    img: mainImage8,
    link: "",
  },
];

function Main(props) {
  const navigate = useNavigate();

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
              <div className="black-big">What You Want</div>
            </div>
          </div>
          <div className="sub-title">
            <div className="row-text">Don't hesitate to make your own blockchain network.</div>
            <div className="row-text">Just build it with EQBR</div>
          </div>
          <video className="main-video" muted autoPlay loop>
            <source src={mainVideo} type="video/mp4" />
          </video>
          {/*<div className="infographic-wrapper">*/}
          {/*    Infographic*/}
          {/*</div>*/}
        </div>
        <div className="content-box-wrapper"></div>
        <div className="content-box-wrapper margin-top-160">
          <div className="title">
            <div className="row-wrapper line-height-60">
              <div className="black-medium">Next Level Blockchain Engine</div>
            </div>
            <div className="row-wrapper line-height-60">
              <div className="blue-medium">Equilibrium</div>
            </div>
          </div>
          <div className="sub-title">
            <div className="row-text">Numerous blockchain solutions can be developed</div>
            <div className="row-text">based on an advanced 3rd generation blockchain engine technology</div>
          </div>
          <div className="equilibrium-introduce">
            <img className="equilibrium-introduce-background-image" src={mainImage1} alt="equilibrium" />
            <div className="equilibrium-introduce-wrapper">
              <div className="equilibrium-description-wrapper">
                <p className="equilibrium-description">Commercially availble</p>
                <p className="equilibrium-description">3rd gen, Blockchain Engine</p>
                <p className="equilibrium-description">
                  with <span className="highlight">High Performance</span>
                </p>
                <p className="equilibrium-description">
                  and <span className="highlight">Scalability</span>
                </p>
              </div>
              <button className="equilibrium-button" onClick={() => navigate("/equilibrium")}>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="content-box-wrapper solution">
          <div className="for-background">
            <img className="background-img" src={dotBackground} />
          </div>
          <div className="title">
            <div className="row-wrapper line-height-60">
              <div className="black-medium">One-stop Blockchain Solution</div>
            </div>
            <div className="row-wrapper line-height-60">
              <div className="blue-medium">EQ Hub</div>
            </div>
          </div>
          <button className="learn-more-btn">Learn more</button>
          <div className="explain-wrapper">
            <div className="top-img-wrapper">
              <img className="explain-img" src={mainImage2} />
            </div>
            <div className="box-wrapper">
              <div className="title">{`BNMS, Blockchain Network\nManaging Solution`}</div>
              <div className="sub-title">{`Provides tools to easily create\nblockchain networks and manage nodes.`}</div>
              <div className="img-wrapper">
                <img className="box-img" src={mainImage3} />
              </div>
            </div>
            <div className="box-wrapper">
              <div className="title">{`Contract Library\n& API Docs`}</div>
              <div className="sub-title">{`Developers can easily deploy smart contracts\nand build blockchain services.`}</div>
              <div className="img-wrapper">
                <img className="box-img" src={mainImage4} />
              </div>
            </div>
            <div className="box-wrapper">
              <div className="title">Wallet and Block Explorer</div>
              <div className="sub-title">{`Provides essential functions for\nbuilding blockchain services.`}</div>
              <div className="img-wrapper">
                <img className="box-img" src={mainImage5} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-wrapper">
          <div className="title"></div>
        </div>
        <div className="content-box-wrapper business">
          <div className="title">
            <div className="row-wrapper line-height-60">
              <div className="blue-medium" style={{ marginRight: 20 }}>
                Powerful Platform
              </div>
              <div className="black-medium">to amplify</div>
            </div>
            <div className="row-wrapper line-height-60">
              <div className="black-medium">the value of your business</div>
            </div>
          </div>
          <div className="sub-title">
            <div className="row-text">EQ Hub offers a wide range of services to support</div>
            <div className="row-text">developers' efforts to expand their business.</div>
          </div>
          <div className="platform-card-wrapper">
            {/* TODO */}
            {BUSINESS_SERVICE_LIST.map((el, index) => {
              return <PlatformCard data={el} index={index} />;
            })}
          </div>
        </div>
        <div className="content-box-wrapper margin-top-200">
          <div className="card-wrapper first">
            <img className="card-img whisper" src={mainImage9} />
            <div className="detail-wrapper">
              <div className="blue-title">Super App for Web 3.0</div>
              <div className="title">Whisper</div>
              <div className="description">
                {`Ultimate secure messenger and wallet based on\nblockchain technology. Whisper is a key\napplication that makes EQ Hub a Platform.\nNumorous dAPPs or Projects will be deployed and\nconnected through Whisper.`}
              </div>
              <div className="link-wrapper">
                <div className="sns-wrapper">
                  <img className="sns-icon" src={whisperIcon} alt="whisper" onClick={() => window.open("https://whispermsg.com/")} />
                  <img className="sns-icon" src={twitterIcon} alt="twitter" onClick={() => window.open("https://twitter.com/Whisper_MSG/")} />
                </div>
                <div className="download-wrapper">
                  <img
                    className="download-icon"
                    src={appstoreIcon}
                    alt="appstore"
                    onClick={() => window.open("https://apps.apple.com/us/app/whisper-msg/id1592954310")}
                  />
                  <img
                    className="download-icon"
                    src={googlestoreIcon}
                    alt="google"
                    onClick={() => window.open("https://play.google.com/store/apps/details?id=com.eqbr.whisper.app&hl=en")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper reverse">
            <img className="card-img volare" src={mainImage10} />
            <div className="detail-wrapper">
              <div className="blue-title">Layer 1, Blockchain Network Project</div>
              <div className="title">VOLARE NETWORK</div>
              <div className="description">
                {`Volare Network is the first project to construct\na vast ecosystem based on blockchain networks\ndeploying Equilibrium technology. While its\nultimate goal is to use the high speed and\nscalability of Equilibrium to promote the\ncommercial use of blockchain technology across\nseveral industries, the Volare Network is first\naiming to actively attract highly accessible dApps,\nin particular blockchain-based games.`}
              </div>
              <div className="link-wrapper">
                <div className="sns-wrapper">
                  <img className="sns-icon" src={volareIcon} alt="volare" onClick={() => window.open("https://volare.network/")} />
                  <img className="sns-icon" src={twitterIcon} alt="twitter" onClick={() => window.open("https://twitter.com/volare_official")} />
                  <img className="sns-icon" src={mediumIcon} alt="medium" onClick={() => window.open("https://medium.com/@Volare_Official")} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <img className="card-img myFlex" src={mainImage11} />
            <div className="detail-wrapper">
              <div className="blue-title">NFT Market Place</div>
              <div className="title">MY FLEX</div>
              <div className="description">
                {`MyFlex, US-based NFT Startup, delivers a peer-\nto-peer platform and services for enterprises and\nconsumers which brings value of authenticity\nthrough the first commercially viable,\ndecentralized NFT digital marketplace.`}
              </div>
              <div className="link-wrapper">
                <button className="more-button" disabled>
                  Coming soon
                </button>
              </div>
            </div>
          </div>
          <div className="card-wrapper reverse">
            <img className="card-img APND" src={mainImage12} />
            <div className="detail-wrapper">
              <div className="blue-title">STO Platfrom</div>
              <div className="title">
                <div>A Panda Partners</div>
                <div>(APND)</div>
              </div>
              <div className="description">
                {`STO(Security Token Offering) Project in progress\nwith major financial institutions. The Innovative\nfinancial service using blockchain technology will\nbe launched within this year after designating of\nthe Financial Regulatory Sandbox in South Korea.`}
              </div>
              <div className="link-wrapper">
                <button className="more-button" disabled>
                  Coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-wrapper margin-top-180">
          <div className="title">Why Hesitate ?</div>
          <div className="sub-title">Using EQBR's Products and spare your time</div>
          <div className="btn-wrapper">Get Started</div>
        </div>
      </div>
    </div>
  );
}

const PlatformCard = (props) => {
  const { data, index } = props || {};
  const { id, label, description, link, img } = data || {};

  return (
    <div className="platform-card" key={`platform-card-${index}`}>
      <div className="platform-card-image">
        <img className="platform-card-image-src" src={img} alt="platform" />
      </div>
      <div className="platform-card-content">
        <div className="platform-card-content-title">{label}</div>
        <div className="platform-card-content-description">{description}</div>
        <Link to={link} className="platform-card-content-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Main;
