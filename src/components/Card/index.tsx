import React from 'react'
import './card.scss'
import card4 from '../../assets/card4.svg'

type ICard = {
    text: string,
    image: string,
    type?: string,
    addText1?: string,
    addText2?: string
}

export const Card: React.FC<ICard> = ({ text, image, type, addText1, addText2 }) => {
    return(
        <div className={`card-container ${type}`}>
            <div>
                <div className='card-text'>{text}</div>
                <div className='card-text mdl-text'>{addText1}</div>
                <div className='card-text'>{addText2}</div>
            </div>
            <img className='card-image' src={image} alt="" />
        </div>
    )
}