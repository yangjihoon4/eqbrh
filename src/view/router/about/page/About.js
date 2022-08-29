import React from "react";
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
import news1Image from "../../../assets/images/about/news1.png";
import news2Image from "../../../assets/images/about/news2.png";
import news3Image from "../../../assets/images/about/news3.png";

const TEAM_LIST = [
  {
    companyName: "EQBR Holdings",
    location: "Seoul, South Korea",
    description: `EQBR Holdings is a holding company for EQBR\nGroup and operates a main R&D research center for\nthe underlying blockchain technologies.`,
    members: [
      { name: "Paul J. Lee", position: "Chairman, Founder", image: paulJLeeImage, linkedIn: `https://www.linkedin.com/in/paulus-j-lee-058265232/` },
      { name: "Hyunki Lee", position: "CEO, CTO", image: hyunkiLeeImage, linkedIn: `` },
      { name: "Jinsu Han", position: "HEAD OF RESEARCH CENTER", image: jinsuHanImage, linkedIn: `https://www.linkedin.com/in/jin-su-han-88626522b/` },
      { name: "Jekun Jung", position: "CBO", image: jekunJungImage, linkedIn: `https://www.linkedin.com/in/jekun-jung-73460654/` },
      { name: "Jinho Huh", position: "Advisor", image: jinhoHuhImage, linkedIn: `https://www.linkedin.com/in/hurxyz/` },
    ],
  },
  {
    companyName: "EQBR Networks",
    location: "Singapore",
    description: `EQBR Networks directly operates various\nblockchain-based services, with a focus on\nSoutheast Asian region.`,
    members: [
      { name: "Thomas S. Cheong", position: "CEO", image: thomasSCheongImage, linkedIn: `https://www.linkedin.com/in/seongkoo-cheong-134a8523/` },
      { name: "Michael M. Lee", position: "CMO", image: MichaelMLeeImage, linkedIn: `https://www.linkedin.com/in/michael-lee-6181111b4/` },
    ],
  },
  {
    companyName: "MyFlex",
    location: "San Francisco, CA, USA",
    description: `My Flex is a U.S. based company running an NFT\nmarketplace.  The company also functions as the\nbase for global expansion of EQ Hub's ecosystem.`,
    members: [
      { name: "Soon Kim", position: "CEO", image: soonKimImage, linkedIn: `https://www.linkedin.com/in/soon-kim-b316a427/` },
      { name: "Ted Kim", position: "CPO", image: tedKimImage, linkedIn: `https://www.linkedin.com/in/tedhongkim/` },
      { name: "Tony Kueh", position: "Advisor", image: tonyKuehImage, linkedIn: `https://www.linkedin.com/in/tonykueh/` },
      { name: "Heather Goldman", position: "Advisor", image: heatherGoldmanImage, linkedIn: `https://www.linkedin.com/in/heather-goldman-002353a4/` },
    ],
  },
  // {
  //   companyName: "A Panda Partners (APND)",
  //   location: "South Korea",
  //   description: `APND is a STO financial platform initiated by EQBR\nin partnership with leading financial institutions in\nSouth Korea.`,
  //   members: [
  //     { name: "Young-Min Bang", position: "CEO", image: youngminBangImage, linkedIn: `` },
  //     { name: "In-Su Choi", position: "COO", image: insuChoiImage, linkedIn: `` },
  //   ],
  // },
];

const NEWS_LIST = [
  {
    title: "EQBR Announces the Launch of My Flex, Its US-based NFT Startup for Enterprise and Consumer",
    description: "",
    image: news1Image,
    type: "NEWS",
    date: "08. 15. 2022",
    link: "https://www.coinspeaker.com/eqbr-announces-launch-my-flex-nft-startup",
  },
  {
    title: "Volare Network, the First Commercial Blockchain Network, Releases Volare Business White Paper 1.0",
    description: "",
    image: news2Image,
    type: "NEWS",
    date: "08. 15. 2022",
    link: "https://cryptopotato.com/volare-network-released-volare-business-white-paper-1-0-with-volare-public-sale-announcement/",
  },
  {
    title: "Attorney Cheong Sung Koo takes on a new challenge as a 'Startup CEO'",
    description: "",
    image: news3Image,
    type: "NEWS",
    date: "07. 18. 2022",
    link: "https://m.lawtimes.co.kr/Content/Article?serial=180259",
  },
];

function About(props) {
  return (
    <div id="About">
      <MainSection />
      <Manifesto />
      <OurTeams />
      <NoticeNews data={NEWS_LIST} title={`News & Articles`} />
    </div>
  );
}

const MainSection = (props) => {
  return (
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
  );
};

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
