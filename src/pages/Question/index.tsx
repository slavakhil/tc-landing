import React from 'react';
import { SpeechBubble } from '../../components/Bubbles/SpeechBubble';
import { Button } from '../../components/UI/Buttons';
import { data } from '../../data/data';
import imageSpeech from '../../assets/speech3.svg'
import './question.scss'

const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };

export const Question: React.FC = () => {
    const dataQuestion = data.questions
    return(
        <div id='question' className='question-container'>
            <SpeechBubble type='text3' image={imageSpeech} text1={dataQuestion.card6.text1} text2={dataQuestion.card6.text2} />
            <div className='break'></div>
            <Button text='Задать вопрос' onClick={handleClick} type='btn-2'/>
        </div>
    )
}