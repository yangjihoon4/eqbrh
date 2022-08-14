import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Header.scss";
import logo from "../../assets/images/common/logo.png";
import { useLocation } from "react-router-dom";

const HeaderTab = [
  {
    label: "Equilibrium",
    route: "/equilibrium",
  },
  {
    label: "EQ Hub",
    route: "/eq-hub",
  },
  {
    label: "About",
    route: "/about",
  },
];

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentScroll, setCurrentScroll] = useState(null);

  const checkScroll = useCallback(() => {
    setCurrentScroll(window.scrollY);
  }, [location]);

  const navigateToRoute = (el) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(el.route);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <header style={{ borderBottom: currentScroll < 100 ? "1px solid #ffffff" : "1px solid #E3E3E3" }}>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img
            className="logo-img"
            src={logo}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              navigate("/");
            }}
          />
        </div>
        <div className="btn-link-wrapper">
          {HeaderTab.map((el, index) => {
            return (
              <div className={`link-btn ${location.pathname === el.route ? "selected" : ""}`} key={index} onClick={() => navigateToRoute(el)}>
                {el.label}
              </div>
            );
          })}
          <div className="link-blue-btn" style={{ cursor: "default" }}>
            Get started
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
