import React from "react";
import "./style/Equilibrium.scss";
import Equilibrium_Section1_Image from "../../../assets/images/equilibrium/Equilibrium_Sectiojn1_Image.png";
import Equilibrium_Section4_Image from "../../../assets/images/equilibrium/Equilibrium_Sectiojn4_Image.png";
import { EquilibriumData, EquilibriumSection4Data } from "./EquilibriumData";
import { useNavigate } from "react-router-dom";
import EquilibriumSection3Image1 from "../../../assets/images/equilibrium/Equilibrium_Section3_Image1.png";
import EquilibriumSection3Image2 from "../../../assets/images/equilibrium/Equilibrium_Section3_Image2.png";
import EquilibriumSection3Image3 from "../../../assets/images/equilibrium/Equilibrium_Section3_Image3.png";
import technicalReferencesImage1 from "../../../assets/images/equilibrium/technical_references_image_1.png";
import technicalReferencesImage2 from "../../../assets/images/equilibrium/technical_references_image_2.png";
import technicalReferencesImage3 from "../../../assets/images/equilibrium/technical_references_image_3.png";
import NoticeNews from "../../../template/notice/NoticeNews";

const TECHNICAL_REFERENCES_LIST = [
  {
    title: "Equilibrium Consensus (1)",
    description: "Hello, welcome back to Volare! Today, we would like to delve ourselves a...",
    image: technicalReferencesImage1,
    type: "ARTICLE",
    date: "07. 14. 2022",
    link: "https://medium.com/eqbr/equilibrium-consensus-1-3b0abc95c7d4",
  },
  {
    title: "Equilibrium Consensus (2)",
    description: "Hello, this is Volare. Today, we’re going to briefly introduce the core of the...",
    image: technicalReferencesImage2,
    type: "ARTICLE",
    date: "07. 14. 2022",
    link: "https://medium.com/eqbr/equilibrium-consensus-2-a64ca9fd1d20",
  },
  {
    title: "Equilibrium Micro Chain Structure (1)",
    description: "Today, we would like to dip into the evolution of the service server...",
    image: technicalReferencesImage3,
    type: "ARTICLE",
    date: "07. 14. 2022",
    link: "https://medium.com/eqbr/equilibrium-micro-chain-structure-1-b6eba253f6c2",
  },
];

function Equilibrium(props) {
  const navigate = useNavigate();
  const navigateToEqHub = (el) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate("/eq-hub");
  };
  const openLink = (link) => {
    if (Boolean(link)) {
      window.open(`${link}`);
    }
  };
  return (
    <div id="Equilibrium">
      <div className="equilibrium-section1">
        <div className="equilibrium-section1-text-wrapper">
          <div className="equilibrium-section1-text-title-wrapper">
            <div className="equilibrium-section1-text-title">THE NEXT</div>
            <div className="equilibrium-section1-text-title gradient-text">BIG THING</div>
            <div className="equilibrium-section1-text-title">IN BLOCKCHAIN</div>
          </div>
          <div className="equilibrium-section1-text-sub-title-wrapper">
            <div className="equilibrium-section1-text-sub-title">{"The commercially viable blockchain engine"}</div>
          </div>
        </div>
        <img className="equilibrium-section1-image" src={Equilibrium_Section1_Image} alt="" />
      </div>
      <div className="equilibrium-section2">
        {EquilibriumData.map((el, index) => {
          return <GradientInformation data={el} key={index} />;
        })}
      </div>
      <div className="equilibrium-section3">
        <div className="equilibrium-section3-title">
          How We <span className="gradient-text">Differentiate</span> from Others
        </div>
        <div className="equilibrium-section3-card-container">
          <DifferentiateList />
        </div>
      </div>
      <div className="equilibrium-section4">
        <span className="equilibrium-section4-title text-40">
          Our Academic <span className="gradient-text">Endeavours</span>
        </span>
        <div className="equilibrium-section4-image-container">
          {EquilibriumSection4Data.map((el, index) => {
            return (
              <img
                key={`academic-endeavours-${index}`}
                className="equilibrium-section4-image"
                src={el.image}
                onClick={() => openLink(el.link)}
                style={{ cursor: Boolean(el.link) ? "pointer" : "default" }}
                alt={`academic-endeavours`}
              />
            );
          })}
        </div>

        <div className="equilibrium-section4-description">
          {`The project, Blockchain Technology for Data-driven Economy,\naims to effectively  compose an equalizer in large cluster of nodes.`}
        </div>
      </div>
      <NoticeNews data={TECHNICAL_REFERENCES_LIST} title={`Technical References`} readMore={"https://medium.com/eqbr/technology/home"} />

      {/* <div className="equilibrium-section5">
        <div className="equilibrium-section5-title-wrapper">
          <div className="equilibrium-section5-title">Let's Build Your Own</div>
          <div className="equilibrium-section5-title">Blockchain Network</div>
        </div>
        <div className="equilibrium-section5-sub-title-wrapper">
          <div className="equilibrium-section5-sub-title"> By just One-click, You can Create</div>
          <div className="equilibrium-section5-sub-title"> Simple, Faster and Easy.</div>
        </div>
        <Button className="main-button large-button default" onClick={() => navigateToEqHub()}>
          Go to EQ Hub
        </Button>
      </div> */}
    </div>
  );
}

export default Equilibrium;

const GradientInformation = ({ data }) => {
  return (
    <div className="gradient-info">
      <div className="gradient-info-data-wrapper">
        <div className="gradient-text gradient-info-data">{data.data}</div>
        <div className="gradient-info-unit">{data.unit}</div>
      </div>
      <div className="gradient-info-description">{data.description}</div>
    </div>
  );
};

const DifferentiateList = () => {
  return (
    <div className="differentiate-list">
      <div className="differentiate-list-item">
        <div className="differentiate-list-item-img">
          <img src={EquilibriumSection3Image1} alt="equilibrium" className="differentiate-list-item-img-src" />
        </div>
        <div className="differentiate-list-item-text">
          <p className="differentiate-list-item-text-title">
            Consensus Algorithm <span className="highlight">Equalize</span>
          </p>
          <span className="differentiate-list-item-text-description">
            {`Equilibrium engine employs Equalize, a proprietary non-\ncompetitive consensus method developed based on\nPBFT, to resolve speed problems of PoW, a competitive\nconsensus of previous generation blockchains.`}
          </span>
        </div>
      </div>
      <div className="differentiate-list-item reverse">
        <div className="differentiate-list-item-img">
          <img src={EquilibriumSection3Image2} alt="equilibrium" className="differentiate-list-item-img-src" />
        </div>
        <div className="differentiate-list-item-text">
          <p className="differentiate-list-item-text-title">
            <span className="highlight">Micro Chain</span> Architecture
          </p>
          <span className="differentiate-list-item-text-description">
            {`Equilibrium engine employs MSA to design each service\ndomain as a ‘Micro Chain’, isolating failures and verloads\nbetween Micro Chains, and ultimately improving\nscalability of the entire network.`}
          </span>
        </div>
      </div>
      <div className="differentiate-list-item">
        <div className="differentiate-list-item-img">
          <img src={EquilibriumSection3Image3} alt="EVM" className="differentiate-list-item-img-src" />
        </div>
        <div className="differentiate-list-item-text">
          <p className="differentiate-list-item-text-title">
            Supporting <span className="highlight">EVM</span>
          </p>
          <span className="differentiate-list-item-text-description">
            {`EVM allows Ethereum-based smart contracts to be\nutilized, making it easy for Ethereum developers\nto create blockchain services using Equilibrium.`}
          </span>
        </div>
      </div>
    </div>
  );
};
