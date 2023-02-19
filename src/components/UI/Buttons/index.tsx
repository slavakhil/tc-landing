import React from 'react';
import './button.scss'

type IButton = {
    text: string,
    type: string,
    onClick?: () => void

}

export const Button: React.FC<IButton> = ({ 
    text, 
    type, 
    onClick
}) => {
    return(
        <button className={type} onClick={onClick}>{text}</button>
    )
}