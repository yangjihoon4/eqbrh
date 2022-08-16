import React from "react";
import "./style/NoticeNews.scss";

const NoticeNews = (props) => {
  const { data } = props || {};

  return (
    <section className="notice-news">
      <div className="notice-news-container">
        <div className="notice-news-header">
          <p className="notice-news-header-title">News & Articles</p>
          <div className="notice-news-header-more-btn">{`Read more >`}</div>
        </div>
        <div className="notice-card-wrapper">
          {data.map((el) => {
            return <NoticeNewsCard data={el} />;
          })}
        </div>
      </div>
    </section>
  );
};

const NoticeNewsCard = (props) => {
  const { data } = props || {};
  const { image, title, description, type, date, link } = data || {};
  return (
    <div className="notice-news-card" onClick={() => window.open(link)}>
      <div className="notice-news-card-image">
        <img src={image} className="notice-news-card-image-src" alt="notice-card" />
      </div>
      <div className="notice-news-card-info">
        <div className="notice-news-card-info-header">
          <div className="notice-news-card-info-header-type">{type}</div>
          <div className="notice-news-card-info-header-date">{date}</div>
        </div>
        <div className="notice-news-card-info-content">
          <div className="notice-news-card-info-content-title">{title}</div>
          {/* <div className="notice-news-card-info-content-description"></div> */}
        </div>
      </div>
    </div>
  );
};
export default NoticeNews;
