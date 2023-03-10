import React from "react";
import { Card } from "../../components/Card";
import { Title } from "../../components/UI/Title";
import { data } from "../../data/data";
import "./explain-work.scss";
import schema from "../../assets/schema.svg";
import schema1 from "../../assets/schema1.svg";
import schema2 from "../../assets/schema2.svg";
import card5 from "../../assets/card5.svg";
import wm1 from "../../assets/wm1.svg";
import wm2 from "../../assets/wm2.svg";
import wm3 from "../../assets/wm3.svg";
import wm4 from "../../assets/wm4.svg";
import wm5 from "../../assets/wm5.svg";




export const ExplainWork: React.FC = () => {
  const dataHowitWorks = data.howItWorks;
  return (
    <div id="explain-work" className="explain-work-container">
      <Title text={dataHowitWorks.title} />
      <div className="explain-container web">
        <div className="explain-cards">
        {dataHowitWorks.cards.map((el, index) => index%2 === 0 &&
            <div key={index} className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={el.image} alt="" />
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          )}
        </div>
        <div>
          <img className="schema" src={schema} alt="" />
        </div>
        <div style={{marginTop: '244px'}} className="explain-cards">
        {dataHowitWorks.cards.map((el, index) => index%2 === 1 &&
            <div key={index} className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={el.image} alt="" />
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          )}
        </div>
      </div>
      <div className="explain-container mobile">
        <div className="explain-cards">
          {dataHowitWorks.cards.map((el, index) => (
            <div key={index} className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={el.image} alt="" />
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          ))}
        </div>
        <div>
          <img className="schema1" src={schema1} alt="" />
          <img className="schema2" src={schema2} alt="" />
        </div>
      </div>
      <div className="explain-container extra-mobile">
        <div className="explain-cards">
            <div className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={dataHowitWorks.cards[0].image} alt="" />
                <div className="card-name">{dataHowitWorks.cards[0].title}</div>
              </div>
              <div className="card-description">{dataHowitWorks.cards[0].description}</div>
            </div>
            <img className="schema-element" src={wm1} alt=""></img>
            <div className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={dataHowitWorks.cards[1].image} alt="" />
                <div className="card-name">{dataHowitWorks.cards[1].title}</div>
              </div>
              <div className="card-description">{dataHowitWorks.cards[1].description}</div>
            </div>
            <img className="schema-element" src={wm2} alt=""></img>
            <div className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={dataHowitWorks.cards[2].image} alt="" />
                <div className="card-name">{dataHowitWorks.cards[2].title}</div>
              </div>
              <div className="card-description">{dataHowitWorks.cards[2].description}</div>
            </div>
            <img className="schema-element" src={wm3} alt=""></img>
            <div className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={dataHowitWorks.cards[3].image} alt="" />
                <div className="card-name">{dataHowitWorks.cards[3].title}</div>
              </div>
              <div className="card-description">{dataHowitWorks.cards[3].description}</div>
            </div>
            <img className="schema-element" src={wm4} alt=""></img>
            <div className="explain-card__element">
              <div className="card-title">
                <img className="card-img" src={dataHowitWorks.cards[4].image} alt="" />
                <div className="card-name">{dataHowitWorks.cards[4].title}</div>
              </div>
              <div className="card-description">{dataHowitWorks.cards[4].description}</div>
            </div>
            <img className="schema-element" src={wm5} alt=""></img>
        </div>
      </div>
      <Card text={data.card5.text} image={card5} />
    </div>
  );
};
