
import React from 'react';
import '../App.css'

function Button({ text, dispatch }) {
  const handleButtonClick = () => {
    console.log(`${text} clicked!`);
  };

  return <button onClick={handleButtonClick}>{text}</button>;
}

export default Button;

