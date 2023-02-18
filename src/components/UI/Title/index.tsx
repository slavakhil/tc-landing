import React from 'react'
import './title.scss'

type ITitle = {
    text: string
}

export const Title: React.FC<ITitle> = ({ text }) => {
    return <div className='title'>{text}</div>
}