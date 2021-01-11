import React from 'react';

const Button = ({ value, bg}) => {
  return (
    <div className="button" style={{background: {bg}}>
			 {value}
    </div>
  )
}

export default Button;
