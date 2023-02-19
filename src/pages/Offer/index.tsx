import React from "react";
import { Button } from "../../components/UI/Buttons";
import imageTCMain from "../../assets/tenderChadMain1.png";
import imageSpeech from "../../assets/speech1.png";
import card from "../../assets/card2.png";
import { data } from "../../data/data";
import "./offer.scss";
import { Card } from "../../components/Card";
import { Bubble } from "../../components/Bubbles/Bubble";
import { SpeechBubble } from "../../components/Bubbles/SpeechBubble";
import { Anchor } from "antd";
import Link from "antd/es/typography/Link";

export const Offer: React.FC = () => {
  const dataTitle = data.offer;
  return (
    <>
    <div className="offer">
      <div className="offer-container">
        <div className="info-offer">
          <div className="title-offer">{dataTitle.title}</div>
          <div className="description-offer">
            <div className="description-offer__el">
              {dataTitle.description1}
            </div>
            <div className="description-offer__el">
              {dataTitle.description2}
            </div>
          </div>

          <div className="button-offer">
            <Anchor affix={false}
              items={[{key: 'about', href: '#about', title: ''}]}>
            </Anchor>
            <Button text="Узнать больше" type="btn-1"></Button>
          </div>
        </div>
        <img className="image-offer" src={imageTCMain} alt="" />
      </div>
      
      <SpeechBubble
        type="text1"
        image={imageSpeech}
        text1={dataTitle.info.card1.text1}
        text2={dataTitle.info.card1.text2}
      />
      <div className="offer-break"></div>
      <div className="offer-bubble">
        <div className="bubble-1">
        <Bubble text={dataTitle.info.info1} type="" />
        </div>
        <div className="offer-break"></div>
        <div className="bubble-2">
        <Bubble text={dataTitle.info.info2} type="right" />
        </div>
      </div>
      <div className="offer-break"></div>
      
      <Card image={card} text={data.card2} />
      <div id="about"></div>
    </div>
    </>
  );
};
