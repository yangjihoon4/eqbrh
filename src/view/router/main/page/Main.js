import React from "react";
import "./style/Main.scss";
import mainImage1 from "../../../assets/images/main/mainImage1.png";
import mainImage9 from "../../../assets/images/main/mainImage9.png";
import mainImage10 from "../../../assets/images/main/mainImage10.png";
import mainImage11 from "../../../assets/images/main/mainImage11.png";
import mainImage12 from "../../../assets/images/main/mainImage12.png";
import volareIcon from "../../../assets/images/main/volare_icon.png";
import twitterIcon from "../../../assets/images/main/twitter_icon.png";
import whisperIcon from "../../../assets/images/main/whisper_icon.png";
import mediumIcon from "../../../assets/images/main/medium_icon.png";
import appstoreIcon from "../../../assets/images/main/app_store_icon.png";
import googlestoreIcon from "../../../assets/images/main/google_store_icon.png";
import whisperVideo1 from "../../../assets/video/whisper1_video.mp4";
import whisperVideo2 from "../../../assets/video/whisper2_video.mp4";
import eqhubVideo1 from "../../../assets/video/eqhub1_video.mp4";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();

  return (
    <div id={"Main"}>
      <div className="content-wrapper">
        <div className="content-box-wrapper">
          <div className="title">
            <div className="row-wrapper">
              <p className="black-big">EXPAND YOUR</p>
            </div>
            <div className="row-wrapper">
              <p className="blue-big">WEB 3.0 HORIZON</p>
            </div>
          </div>
          <div className="sub-title">
            <div className="row-text">{`With EQBR’s versatile suite of blockchain\nplatform and development tools.`}</div>
          </div>
          <video className="main-video" muted autoPlay loop>
            <source src={whisperVideo1} type="video/mp4" />
          </video>
          {/*<div className="infographic-wrapper">*/}
          {/*    Infographic*/}
          {/*</div>*/}
        </div>
        <div className="content-box-wrapper margin-top-160">
          <div className="title">
            <div className="row-wrapper line-height-60">
              <div className="black-medium">Everything Starts From Here</div>
            </div>
            <div className="row-wrapper line-height-60">
              <div className="blue-medium">Equilibrium</div>
            </div>
          </div>
          <div className="sub-title" />
          <div className="equilibrium-introduce">
            <img className="equilibrium-introduce-background-image" src={mainImage1} alt="equilibrium" />
            <div className="equilibrium-introduce-wrapper">
              <div className="equilibrium-description-wrapper">
                <p className="equilibrium-description">Equilibrium is 3rd generation</p>
                <p className="equilibrium-description">Web 3.0 ready blockchain</p>
                <p className="equilibrium-description">
                  engine with <span className="highlight">high performance</span>
                </p>
                <p className="equilibrium-description">
                  and <span className="highlight">scalability</span>
                </p>
              </div>
              <button
                className="equilibrium-button"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  navigate("/equilibrium");
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="content-box-wrapper eqhub">
          <div className="eqhub-header">
            <div className="eqhub-header-title">One-stop Blockchain Solution</div>
            <div className="eqhub-header-title highlight">EQ Hub</div>
          </div>
          <div className="eqhub-video">
            <video className="eqhub-video-src" muted autoPlay loop>
              <source src={eqhubVideo1} type="video/mp4" />
            </video>
          </div>
          <button
            className="eqhub-more-button"
            onClick={() => {
              navigate("/eq-hub");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Learn more
          </button>
        </div>
        <div className="content-box-wrapper service">
          <div className="service-header">
            <div className="service-title-wrapper">
              <p className="service-title">Our Practical Renderings of</p>
              <p className="service-title">
                <span className="highlight">Web 3.0 Platform</span>
              </p>
            </div>
          </div>
          <div className="card-wrapper first">
            <img className="card-img whisper" src={mainImage9} />
            <div className="detail-wrapper">
              <div className="blue-title">Super App for Web 3.0</div>
              <div className="title">Whisper MSG</div>
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
              <div className="title">Volare Network</div>
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
              <div className="title">MyFlex</div>
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
        {/* <div className="content-box-wrapper margin-top-180">
          <div className="title">Why Hesitate ?</div>
          <div className="sub-title">Using EQBR's Products and spare your time</div>
          <div className="btn-wrapper" style={{ cursor: "default" }}>
            Get Started
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
