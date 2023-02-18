import React from 'react';
import './button.scss'

type IButton = {
    text: string,
    style: string,
    onClick?: () => void

}

export const Button: React.FC<IButton> = ({ 
    text, 
    style, 
    onClick
}) => {
    return(
        <button className={style} onClick={onClick}>{text}</button>
    )
}