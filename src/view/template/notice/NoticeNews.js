import React from "react";
import "./style/NoticeNews.scss";
import news1 from "../../assets/images/about/news1.png";
import news2 from "../../assets/images/about/news2.png";
import news3 from "../../assets/images/about/news3.png";

const NEWS_DUMMY = [
  { title: "", description: "", image: news1, type: "", date: "" },
  { title: "", description: "", image: news2, type: "", date: "" },
  { title: "", description: "", image: news3, type: "", date: "" },
];

const NoticeNews = (props) => {
  // const { noticeTitle, moreLink, data } = props || {};

  return (
    <section className="notice-news">
      <div className="notice-news-container">
        <div className="notice-news-header">
          <p className="notice-news-header-title">News & Articles</p>
          <div className="notice-news-header-more-btn">{`Read more >`}</div>
        </div>
        <div className="notice-card-wrapper">
          {NEWS_DUMMY.map((el) => {
            return <NoticeNewsCard data={el} />;
          })}
        </div>
      </div>
    </section>
  );
};

const NoticeNewsCard = (props) => {
  const { data } = props || {};
  const { image, title, description, type, date } = data || {};
  return (
    <div className="notice-news-card">
      <div className="notice-news-card-image">
        <img src={image} className="notice-news-card-image-src" alt="notice-card" />
      </div>
      <div className="notice-news-card-info">
        <div className="notice-news-card-info-header">
          <div className="notice-news-card-info-header-type">NEWS</div>
          <div className="notice-news-card-info-header-date">April. 05. 2022</div>
        </div>
        <div className="notice-news-card-info-content">
          <div className="notice-news-card-info-content-title">Minthing Platform reveal: KT Group</div>
          <div className="notice-news-card-info-content-description">EQBR is the bonafide open P2P Contents Those commitments are our Zeitgeist</div>
        </div>
      </div>
    </div>
  );
};
export default NoticeNews;
