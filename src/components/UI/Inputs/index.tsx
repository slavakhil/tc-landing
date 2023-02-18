import React from 'react';
import './input.scss'

type IInput = {
    id: string,
    label: string,
    placeholder: string,
    type?: string,
    isRequired?: boolean
}

export const Input: React.FC<IInput> = ({ id, label, placeholder, type, isRequired }) => {
    return (
        <div className='inp-container'>
            <label className='lbl' id={id}>{label}{
                isRequired && <span style={{color: "#BD0000"}}>*</span>
            }</label>
            <div></div>
            <input className='inp' id={id} type={type} placeholder={placeholder} />
        </div>
    )
}

export const InputComm: React.FC<IInput> = ({ id, label, placeholder, type }) => {
    return (
        <div>
            <label className='lbl' id={id}>{label}</label>
            <div></div>
            <textarea className='inp inp-comm' id={id} placeholder={placeholder} />
        </div>
    )
}