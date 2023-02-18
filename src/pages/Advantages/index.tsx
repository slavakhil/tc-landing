import React from "react";
import { SpeechBubble } from "../../components/Bubbles/SpeechBubble";
import { Title } from "../../components/UI/Title";
import { data } from "../../data/data";
import imageSpeech from "../../assets/speech2.png";
import "./advantages.scss";

export const Advantages: React.FC = () => {
  const dataAdvantages = data.advantages;
  return (
    <div id="advantages" className="advantages">
      <div className="advantages-container">
        <Title text={dataAdvantages.title} />
        <div className="advantages-list">
          {
          dataAdvantages.adv.map((el, index) => (
            (index % 2 === 0) &&
            <div className="row">
              <div className="advantages-element">
                <div className="advantages-element__title">
                  <img className="advantage-img"></img>
                  <div className="advantage-title">{dataAdvantages.adv[index].title}</div>
                </div>
                <div className="advantages-element__description">
                    {dataAdvantages.adv[index].description}
                </div>
              </div>
              <div className="advantages-element">
                <div className="advantages-element__title">
                  <img className="advantage-img"></img>
                  <div className="advantage-title">{dataAdvantages.adv[index + 1].title}</div>
                </div>
                <div className="advantages-element__description">
                    {dataAdvantages.adv[index + 1].description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: "80px" }}></div>
        <SpeechBubble
          image={imageSpeech}
          style="text2"
          text1={data.card4.text1}
          text2={data.card4.text2}
        />
      </div>
    </div>
  );
};
