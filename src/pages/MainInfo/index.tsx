import React from 'react';
import { data } from '../../data/data';
import imageTCMain from '../../assets/tenderChadMain2.png'
import card from '../../assets/card3.png'
import './main-info.scss'
import { Card } from '../../components/Card';

export const MainInfo: React.FC = () => {
    const dataInfo = data.about
    return (
        <div id="about1" className='info'>
            <div className='info-container'>
                <img className='image-info' src={imageTCMain} alt="" />
                <div className='info-info'>
                    <div className='title-info'>{dataInfo.title}</div>
                    <div className='description-info'>
                        <div className='description-info__el'>{dataInfo.text1}</div>
                        <div className='description-info__el'>{dataInfo.text2}</div>
                    </div>
                </div>
            </div>
            <Card text={data.card3.text1} addText1={data.card3.text2} addText2={data.card3.text3} image={card} type='left' />
        </div>
    )
}