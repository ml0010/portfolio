import React from 'react'
import '../styles/Button.css'

export const Button = ({text, link}) => {
    return (
        <a className='button' href={link} target='_blank' rel='noreferrer'>{text}</a>
    )
}
