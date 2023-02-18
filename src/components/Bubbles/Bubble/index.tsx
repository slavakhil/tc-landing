import React from 'react';
import './bubble.scss'

type IBubble = {
    text: string,
    type: '' | 'right'
}

export const Bubble: React.FC<IBubble> = ({ text, type }) => {
    return (
        <div className="bubble-wrapper">
            <div className={`bubble ${type}`}>
                <div className="txt">
                    <p className="message">{text}</p>
                </div>
                <div className={`bubble-arrow ${type}`}></div>
            </div>
        </div>
    )
}