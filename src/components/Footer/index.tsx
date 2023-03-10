import React from "react";
import "./footer.scss";
import vk from '../../assets/vk.svg'
import tg from '../../assets/tg.svg'
import wa from '../../assets/wa.svg'
import gmail from '../../assets/gmail.svg'

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
              <img className="social-item" onClick={() => window.open("https://vk.com/do6piu_kot")} src={vk} alt="" />
              <img className="social-item" onClick={() => window.open("http://t.me/Do6piu_KoT")} src={tg} alt="" />
              <img className="social-item" onClick={() => window.open("https://wa.me/79144551414?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BB%D0%BE%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20TenderChad...")} src={wa} alt="" />
              <img className="social-item" onClick={() => window.open("mailto:devinside.info@gmail.com?subject=Вопрос по TenderChad")} src={gmail} alt="" />

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
