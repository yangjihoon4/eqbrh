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
import { useNavigate } from "react-router-dom";
import TextHighLight from "../../../atom/text/TextHighLight";

const EQBR_HISTORYS = [
  {
    year: 2018,
    description: `Research initiative for blockchain technology\nDevelop Blockchain Engine prototype`,
  },
  {
    year: 2019,
    description: `Develop blockchain Messenger prototype\nDevelop Digital Wallet prototype`,
  },
  {
    year: 2020,
    description: `Incorporated as EQBR Holdings Co.,Ltd.\nDevelop ‘Equilibrium’ v1.0\nLaunch ‘Whisper MSG’ Secured Messenger`,
  },
  {
    year: 2021,
    description: `Engage in a government-led research project\nUpgrade ‘Equilibrium’ v2.0\nUpdate ‘Whisper MSG’ with Digital Wallet `,
  },
  {
    year: 2022,
    description: `Upgrade ‘Equilibrium’ v3.0, supporting EVM\nUpdate ‘Whisper MSG’, Web 3.0 Platform\nLaunch ‘EQ Hub’, Blockchain Solution`,
  },
];

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
        {/* <div className="content-box-wrapper margin-top-160">
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
        </div> */}
        {/* <div className="content-box-wrapper eqhub">
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
        </div> */}
        <EQBRWeb3Introduce />
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
              <div className="sub-title">Super App for Web 3.0</div>
              <div className="title">
                <TextHighLight text={"Whisper MSG"} />
              </div>
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
            <img className="card-img equilibrium" src={mainImage10} />
            <div className="detail-wrapper">
              <div className="sub-title">Blockchain Engine</div>
              <div className="title">
                <TextHighLight text={"Equilibrium"} />
              </div>
              <div className="description">
                {`A new blockchain engine that can surpass the\nperformance of not only first and second\ngeneration blockchain networks, but other\nexisting third generation blockchain networks,\nin terms of speedand the scalability.`}
              </div>
              <div className="link-wrapper">
                <button
                  className="more-button"
                  onClick={() => {
                    navigate("/equilibrium");
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <img className="card-img eqHub" src={mainImage11} />
            <div className="detail-wrapper">
              <div className="sub-title">Blockchain Solution</div>
              <div className="title">
                <TextHighLight text={"EQ HUB"} />
              </div>
              <div className="description">
                {`Easily create blockchain network and develop,\noperate and distribute various blockchain services\nwith EQ Developer.`}
              </div>
              <div className="link-wrapper">
                <button
                  className="more-button"
                  onClick={() => {
                    navigate("/eq-hub");
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Learn more
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

const EQBRWeb3Introduce = () => {
  // TODO :: text-description top, bottom 수정해야 함..
  return (
    <section className="eqbr-web3-introduce">
      <div className="eqbr-web3-introduce-title">
        <span>Leading the Future of </span>
        <TextHighLight text={"Web 3.0"} />
      </div>
      <div className="text-container">
        <div className="text-main">{`EQBR proposes a New Web 3.0 Platform\nin which users can readily access services.`}</div>
        <div className="text-description top">{`To enhance the utility and convenience of users,\nWhisper MSG allows users to access various services\nthrough a one-time login with the assigned private key,\nand connect service wallets to Whisper MSG wallet.`}</div>
        <div className="text-description bottom">{`User privacy is also greatly fortified as user information\ncan only be accessed by a user with the private key.`}</div>
      </div>
      <div className="eqbr-history">
        <div className="eqbr-history-title">
          <span>Breaking </span>
          <TextHighLight text={"New Ground"} />
        </div>
        <div className="eqbr-history-container">
          <div className="eqbr-history-container-box">
            <div className="eqbr-history-content-wrapper">
              {EQBR_HISTORYS.map((el) => {
                return (
                  <div className="eqbr-history-content">
                    <p className="eqbr-history-content-year">{el.year}</p>
                    <p className="eqbr-history-content-description">{el.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
