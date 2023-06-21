import React from "react";
import { SpeechBubble } from "../../components/Bubbles/SpeechBubble";
import { Title } from "../../components/UI/Title";
import { data } from "../../data/data";
import logoSupport from "../../assets/logo-support.png";
import "./support.scss";

export const Support: React.FC = () => {

  return (
    <div id="support" className="support">
      <div className="support-container">
        <Title text={"Поддержка"} />
        <div className="support-list">
          <a href="https://fasie.ru/" target="_blank"><img className="support-item" src={logoSupport} /></a>
          
        </div>
      </div>
    </div>
  );
};
