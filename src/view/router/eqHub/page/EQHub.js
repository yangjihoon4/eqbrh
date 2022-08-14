import React, { useEffect, useState } from "react";
import "./style/EqHub.scss";
import EQHub_section1_Image from "../../../assets/images/eqHub/EQHub_Section1_Image.png";
import { EqHubSection5TabData, EqHubSection4CardData } from "./style/EqHubData";
import EQHub_Section5_Add from "../../../assets/images/eqHub/EQHub_Section5_Add_Icon.png";
import EQHub_Section5_Hide from "../../../assets/images/eqHub/EQHub_Section5_Hide_Icon.png";
import explainImage from "../../../assets/images/eqHub/explain_image.png";
import hubIntroduceImage1 from "../../../assets/images/eqHub/hub_introduce_image1.png";
import hubIntroduceImage2 from "../../../assets/images/eqHub/hub_introduce_image2.png";
import hubIntroduceImage3 from "../../../assets/images/eqHub/hub_introduce_image3.png";
import businessImage1 from "../../../assets/images/eqHub/business_image1.png";
import businessImage2 from "../../../assets/images/eqHub/business_image2.png";
import businessImage3 from "../../../assets/images/eqHub/business_image3.png";
import dotBackground from "../../../assets/images/eqHub/dotBackground.png";
import { Link } from "react-router-dom";

const HUB_INTRODUCE = [
  {
    id: 1,
    image: hubIntroduceImage1,
    description: `Provides tools to easily create and\nmanage blockchain networks`,
  },
  {
    id: 2,
    image: hubIntroduceImage2,
    description: `Developers can easily deploy smart contracts\nand build blockchain services`,
  },
  {
    id: 3,
    image: hubIntroduceImage3,
    description: `Provides essential functions such as\nWallet and Block Explorer`,
  },
];

const BUSINESS_SERVICE_LIST = [
  {
    id: 1,
    label: "DAPP CENTER",
    description: "Developers can easily upload their dAPPs on dAPP Center to create their own blockchain services.",
    img: businessImage1,
    link: "",
  },
  {
    id: 2,
    label: "LAUNCHPAD",
    description: "Launchpad helps to induce investments from investors by showcasing actual projects that runs on a blockchain network.",
    img: businessImage2,
    link: "",
  },
  {
    id: 3,
    label: "AIRDROP",
    description: "Airdrops are free coin(or token) giveaway events that are frequently carried out by blockchain service promoters.",
    img: businessImage3,
    link: "",
  },
];
function EqHub(props) {
  const [selectedToolInfo, setSelectedToolInfo] = useState("network");

  return (
    <div id="EqHub">
      <div className="eqhub-section1">
        <div className="eqhub-section1-text-wrapper">
          <div className="eqhub-section1-text-title">
            <span className="text-title">THE ULTIMATE</span>
            <span className="text-title">WEB 3.0</span>
            <span className="gradient-text text-title">TOOLCASE</span>
          </div>
          <div className="eqhub-section1-text-sub-title">
            <span className="text-description">Simple, Fast and Limitless</span>
          </div>
        </div>
        <img className="eqhub-section1-image" src={EQHub_section1_Image} alt="" />
      </div>
      {/* <div className="eqhub-section2">
        <div className="eqhub-section2-card-container">
          {EqHubSection2CardData.map((el, index) => {
            return <EqHubSection2Card data={el} key={index} />;
          })}
        </div>
      </div> */}
      <div className="eqhub-section3">
        <div className="for-background">
          <img className="background-img" src={dotBackground} alt={"background"} />
        </div>
        <div className="eqhub-section3-title">
          <p className="eqhub-section3-title-row">
            <span className="highlight">A Complete Amenity</span> for
          </p>
          <p className="eqhub-section3-title-row">Blockchain Product Development</p>
        </div>
        <div className="explain-wrapper">
          <div className="top-img-wrapper">
            <img className="explain-img" src={explainImage} alt={"background"} />
          </div>
          {HUB_INTRODUCE.map((el, index) => (
            <div className="box-wrapper" key={`box-${el.id}`}>
              <p className="description">{el.description}</p>
              <div className="img-wrapper">
                <img className="box-img" src={el.image} alt={`box-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="eqhub-section4">
        <div className="eqhub-section4-title">
          <p className="eqhub-section4-title-row">Value Added</p>
          <p className="eqhub-section4-title-row highlight">Promotional Tools</p>
        </div>
        <div className="platform-card-wrapper">
          {/* TODO */}
          {BUSINESS_SERVICE_LIST.map((el, index) => {
            return <PlatformCard data={el} index={index} />;
          })}
        </div>
      </div>
      <div className="eqhub-section5">
        <div className="eqhub-section5-title">
          <span className="text-40">
            EQ Hub
            <br />
            <span className="gradient-text">How It Works</span>
          </span>
        </div>
        <EQHubSection5Tab selectedTool={selectedToolInfo} setSelectedTool={setSelectedToolInfo} />
      </div>
      <div className="eqhub-section6">
        <div className="eqhub-section6-title">
          <span className="text-40">
            <span className="gradient-text">Projects and Clients</span> <br />
            of EQ Hub
          </span>
        </div>
        <div className="eqhub-section6-example-container">
          {EqHubSection4CardData.map((el, index) => {
            return <EQHubSection6Card data={el} key={index} />;
          })}
        </div>
      </div>
      {/* <div className="eqhub-section7">
        <div className="eqhub-section7-title">
          <span className="text-40">All Heroes Need Sidekicks</span>
        </div>
        <div className="eqhub-section7-sub-title">
          <span className="text-18">Let’s check your helpful equipments and solutions.</span>
        </div>
        <Button className="main-button large-button default" style={{ cursor: "default" }}>
          Get Started
        </Button>
      </div> */}
    </div>
  );
}

export default EqHub;

const EqHubSection2Card = ({ data }) => {
  //TODO: 서버에서 받아오는 데이터를 렌더링 할 예정입니다. 임시데이터 입니다.
  return (
    <div className="eqhub-section2-card">
      <div className="eqhub-section2-card-amount">
        <span className="gradient-text text-54">{data.amount}</span>
      </div>
      <div className="eqhub-section2-card-decription">
        <span className="fs-16 fw-500">{data.description}</span>
      </div>
    </div>
  );
};

const EQHubSection5Tab = ({ selectedTool, setSelectedTool }) => {
  const [selectedToolSource, setSelectedToolSource] = useState(null);

  useEffect(() => {
    setSelectedToolSource(EqHubSection5TabData.find((data) => selectedTool === data.tool)?.source);
  }, [selectedTool]);
  return (
    <div className="eqhub-section5-tab">
      <div className="eqhub-section5-tab-toggle-container">
        {EqHubSection5TabData.map((el, index) => {
          return (
            <div
              className={`eqhub-section5-tab-toggle ${selectedTool === el.tool ? "selected" : ""}`}
              onClick={() => setSelectedTool(el.tool)}
              key={index}
            >
              <div className={`eqhub-section5-tab-toggle-left-wrapper ${selectedTool === el.tool ? "selected" : ""}`}>
                <img className="eqhub-section5-tab-toggle-icon" src={selectedTool === el.tool ? el.iconWhite : el.iconBlack} alt="" />
                <div className={`eqhub-section5-tab-toggle-text-wrapper ${selectedTool === el.tool ? "selected" : ""}`}>
                  <div className={`eqhub-section5-tab-toggle-title ${selectedTool === el.tool ? "selected" : ""}`}>
                    <span className="fs-18 fw-600">{el.title}</span>
                  </div>
                  {selectedTool === el.tool && (
                    <div className="eqhub-section5-tab-toggle-description">
                      <span className="fs-14 fw-400">{el.description}</span>
                    </div>
                  )}
                </div>
              </div>
              <img
                className="eqhub-section5-tab-toggle-action-icon"
                src={selectedTool === el.tool ? EQHub_Section5_Hide : EQHub_Section5_Add}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="eqhub-section5-tab-source-container">
        <img className="eqhub-section5-tab-source" src={selectedToolSource} alt="" />
      </div>
    </div>
  );
};

const EQHubSection6Card = ({ data }) => {
  const openLink = (link) => {
    if (Boolean(link)) {
      window.open(`${link}`);
    }
  };
  return (
    <div className="eqhub-section6-card">
      <img
        className="eqhub-section6-card-image"
        src={data.image}
        alt=""
        onClick={() => openLink(data.link)}
        style={{ cursor: Boolean(data.link) ? "pointer" : "default" }}
      />
    </div>
  );
};

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
          {/*Learn More*/}
        </Link>
      </div>
    </div>
  );
};
