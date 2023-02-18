import React from "react";
import { Card } from "../../components/Card";
import { Title } from "../../components/UI/Title";
import { data } from "../../data/data";
import "./explain-work.scss";
import schema from "../../assets/schema.png";
import schema1 from "../../assets/schema1.png";
import schema2 from "../../assets/schema2.png";
import schema3 from "../../assets/schema3.png";
import card5 from "../../assets/card5.png";

export const ExplainWork: React.FC = () => {
  const dataHowitWorks = data.howItWorks;
  return (
    <div id="explain-work" className="explain-work-container">
      <Title text={dataHowitWorks.title} />
      <div className="explain-container web">
        <div className="explain-cards">
        {dataHowitWorks.cards.map((el, index) => index%2 === 0 &&
            <div className="explain-card__element">
              <div className="card-title">
                <div className="card-img"></div>
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          )}
        </div>
        <div>
          <img src={schema} />
        </div>
        <div className="explain-cards">
        {dataHowitWorks.cards.map((el, index) => index%2 === 1 &&
            <div className="explain-card__element">
              <div className="card-title">
                <div className="card-img"></div>
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          )}
        </div>
      </div>
      <div className="explain-container mobile">
        <div className="explain-cards">
          {dataHowitWorks.cards.map((el) => (
            <div className="explain-card__element">
              <div className="card-title">
                <div className="card-img"></div>
                <div className="card-name">{el.title}</div>
              </div>
              <div className="card-description">{el.description}</div>
            </div>
          ))}
        </div>
        <div>
          <img className="schema1" src={schema1} />
          <img className="schema2" src={schema2} />
          <img className="schema3" src={schema3} />
        </div>
      </div>
      <Card text={data.card5.text} image={card5} />
    </div>
  );
};
