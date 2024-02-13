import React from 'react'
import './Button.css';

const Button = ({btntxt,btnclr,onclick}) => {

    const btnvalue ={
        txt:btntxt,
        color:btnclr,
    }
  return (
    <button style={btnvalue} onClick={onclick}>{btntxt}</button>
  )
}

export default Button