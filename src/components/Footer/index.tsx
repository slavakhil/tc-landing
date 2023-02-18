import React from "react";
import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-title">
          <div className="title-name">DevInside</div>
          <div className="title-description">DevInside © 2022</div>
        </div>
        <div className="footer-social">
          <div className="social-title">Мы в соцсетях</div>
          <div className="social-items">
            <div className="social-item" onClick={() => window.open("http://twitter.com/saigowthamr")}>
              <img />
            </div>
            <div className="social-item" onClick={() => window.open("http://twitter.com/saigowthamr")}>
              <img />
            </div>
            <div className="social-item" onClick={() => window.open("http://twitter.com/saigowthamr")}>
              <img />
            </div>
            <div className="social-item" onClick={() => window.open("http://twitter.com/saigowthamr")}>
              <img src=""/>
            </div>
          </div>
        </div>
        <div className="footer-title" style={{ opacity: "0" }}>
          <div className="title-name">DevInside</div>
          <div className="title-description">DevInside © 2022</div>
        </div>
      </div>
    </div>
  );
};
