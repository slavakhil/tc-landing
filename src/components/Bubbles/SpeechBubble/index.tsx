import React from "react";
import "./speech-bubble.scss";

type ISpeechBubble = {
  image: string;
  text1: string;
  text2: string;
  style: string;
};

export const SpeechBubble: React.FC<ISpeechBubble> = ({
  image,
  text1,
  text2,
  style,
}) => {
  return (
    <div className="speech-bubble">
      <img src={image} className="speech-image" />
      <div className="speech-wrapper">
        <div className={`bubble`}>
          {style === "text1" && (
            <div>
              <div className="txt">
                <div style={{ fontWeight: "700" }} className="message">
                  {text1}
                </div>
                <div className="message">{text2}</div>
              </div>
            </div>
          )}
          {style === "text2" && (
            <div>
              <div className="txt">
                <div className="message">{text1}</div>
                <div className="message" style={{ fontWeight: "700" }} >
                  {text2}
                </div>
              </div>
            </div>
          )}
          {style === "text3" && (
            <div>
              <div className="txt">
                <div className="message">{text1}</div>
                <div className="message">{text2}</div>
              </div>
            </div>
          )}
          <div className={`bubble-arrow`}></div>
        </div>
      </div>
    </div>
  );
};
