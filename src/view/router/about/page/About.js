import React from "react";
import { useNavigate } from "react-router-dom";
import TextHighLight from "../../../atom/text/TextHighLight";
import TeamsContainer from "../components/teamsContainer/TeamsContainer";
import "./style/About.scss";
import paulJLeeImage from "../../../assets/images/about/EQBRH_paul_j_lee_img.png";
import hyunkiLeeImage from "../../../assets/images/about/EQBRH_hyunki_lee_img.png";
import jinsuHanImage from "../../../assets/images/about/EQBRH_jinsu_han_img.png";
import jekunJungImage from "../../../assets/images/about/EQBRH_jekun_jung_img.png";
import jinhoHuhImage from "../../../assets/images/about/EQBRH_jinho_huh_img.png";
import thomasSCheongImage from "../../../assets/images/about/EQBRN_thomas_s_cheong_img.png";
import MichaelMLeeImage from "../../../assets/images/about/EQBRN_michael_m_lee_img.png";
import soonKimImage from "../../../assets/images/about/MyFlex_soon_kim_img.png";
import tedKimImage from "../../../assets/images/about/MyFlex_ted_kim_img.png";
import tonyKuehImage from "../../../assets/images/about/MyFlex_tony_kueh_img.png";
import heatherGoldmanImage from "../../../assets/images/about/MyFlex_heather_goldman_img.png";
import youngminBangImage from "../../../assets/images/about/APND_youngmin_bang_img.png";
import insuChoiImage from "../../../assets/images/about/APND_insu_choi_img.png";
import NoticeNews from "../../../template/notice/NoticeNews";
import mainImage from "../../../assets/images/about/about_main_image.png";

const TEAM_LIST = [
  {
    companyName: "EQBR Holdings",
    location: "South Korea",
    description: `EQBR Holdings is a holding company for EQBR\nGroup and operates a main R&D research center for\nthe underlying blockchain technologies.`,
    members: [
      { name: "Paul J. Lee", position: "Chairman, Founder", image: paulJLeeImage, sns: {} },
      { name: "Hyunki Lee", position: "CEO, CTO", image: hyunkiLeeImage, sns: {} },
      { name: "Jinsu Han", position: "HEAD OF RESEARCH CENTER", image: jinsuHanImage, sns: {} },
      { name: "Jekun Jung", position: "CBO", image: jekunJungImage, sns: {} },
      { name: "Jinho Huh", position: "Advisor", image: jinhoHuhImage, sns: {} },
    ],
  },
  {
    companyName: "EQBR Networks",
    location: " Singapore",
    description: `EQBR Networks directly operates various\nblockchain-based services, with a focus on\nSoutheast Asian region.`,
    members: [
      { name: "Thomas S. Cheong", position: "CEO", image: thomasSCheongImage, sns: {} },
      { name: "Michael M. Lee", position: "CMO", image: MichaelMLeeImage, sns: {} },
    ],
  },
  {
    companyName: "MyFlex",
    location: "USA",
    description: `My Flex is a U.S. based company running an NFT\nmarketplace.  The company also functions as the\nbase for global expansion of EQ Hub's ecosystem.`,
    members: [
      { name: "Soon Kim", position: "CEO", image: soonKimImage, sns: {} },
      { name: "Ted Kim", position: "CPO", image: tedKimImage, sns: {} },
      { name: "Tony Kueh", position: "CTO", image: tonyKuehImage, sns: {} },
      { name: "Heather Goldman", position: "CFO", image: heatherGoldmanImage, sns: {} },
    ],
  },
  {
    companyName: "A Panda Partners (APND)",
    location: "South Korea",
    description: `APND is a STO financial platform initiated by EQBR\nin partnership with leading financial institutions in\nSouth Korea.`,
    members: [
      { name: "Young-Min Bang", position: "CEO", image: youngminBangImage, sns: {} },
      { name: "In-Su Choi", position: "COO", image: insuChoiImage, sns: {} },
    ],
  },
];

function About(props) {
  return (
    <div id="About">
      <section className="about-main">
        <div className="about-main-content">
          <div className="about-main-content-title">
            <p>WE WILL STRIVE</p>
            <p>TO LIVE UP</p>
            <p>
              TO <TextHighLight text={`OUR VISION`} />
            </p>
          </div>
          <div className="about-main-content-sub-title">As a forerunner of upcoming Web 3.0</div>
        </div>
        <img className="about-main-image" src={mainImage} alt="main" />
      </section>
      <Manifesto />
      <OurTeams />
      <NoticeNews />
    </div>
  );
}

const Manifesto = (props) => {
  return (
    <section className="about-manifesto">
      <p className="about-manifesto-title">
        EQBR <TextHighLight text={`Manifesto`} />
      </p>
      <p className="about-manifesto-description">
        {`EQBR is serving for protecting Privacy, pursuing Liveration from\nplatform economy, accelerating internet governance into Decentralization,\nbringing about Information Democracy.`}
      </p>
      <button
        className="about-manifesto-button"
        onClick={() => {
          window.open(`https://medium.com/eqbr/eqbr-holdings-launches-open-beta-of-nft-trading-platform-minthing-with-kt-storywiz-910e6bdab1a7`);
        }}
      >
        Learn more
      </button>
    </section>
  );
};

const OurTeams = (props) => {
  return (
    <section className="our-teams">
      <p className="our-teams-title">
        Our <TextHighLight text={`Teams`} />
      </p>
      <div className="our-teams-list-wrapper">
        {TEAM_LIST.map((el) => {
          return <TeamsContainer data={el} />;
        })}
      </div>
    </section>
  );
};

export default About;
