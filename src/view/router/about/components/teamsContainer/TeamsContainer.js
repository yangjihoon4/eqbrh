import React from "react";
import TextHighLight from "../../../../atom/text/TextHighLight";
import "./style/TeamsContainer.scss";

const TeamsContainer = (props) => {
  const { data } = props || {};
  const { companyName, location, description, members } = data || {};

  return (
    <div className="teams-container">
      <div className="teams-introduce">
        <div className="teams-introduce-company">
          <p className="teams-introduce-company-name">{<TextHighLight text={companyName} />}</p>
          <p className="teams-introduce-company-location">{location}</p>
        </div>
        <div className="teams-introduce-description">{description}</div>
      </div>
      <div className="teams-member-list">
        {members.map((el) => {
          return <MemberCard data={el} />;
        })}
      </div>
    </div>
  );
};

const MemberCard = (props) => {
  const { data } = props || {};
  const { name, position, image, sns } = data || {};
  return (
    <div className="member-card" key={`member-${name}`}>
      <div className="member-card-image">
        <img src={image} className="member-card-image-src" alt="member" />
      </div>
      <div className="member-card-info">
        <div className="member-card-info-name">{name}</div>
        <div className="member-card-info-position">{position}</div>
        <div className="member-card-info-sns"></div>
      </div>
    </div>
  );
};

export default TeamsContainer;
