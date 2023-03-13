import React from "react";
import imageTCMain from "../../assets/tenderChadMain1.svg";
import imageSpeech from "../../assets/speech1.svg";
import card from "../../assets/card2.svg";
import { data } from "../../data/data";
import "./offer.scss";
import { Card } from "../../components/Card";
import { Bubble } from "../../components/Bubbles/Bubble";
import { SpeechBubble } from "../../components/Bubbles/SpeechBubble";
import { Anchor } from "antd";
import circle from '../../assets/circles.svg'

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
            <Anchor targetOffset={100} affix={false}
              items={[{key: 'about', href: '#about', title: 'Узнать больше'}]}>
            </Anchor>
          </div>
        </div>
        <img className="image-offer" src={imageTCMain} alt="" />
      </div>
      {/* <div className="circle">
        <img className="center" src={circle} />
      </div> */}
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
    </div>
    </>
  );
};
