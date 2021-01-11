import React from 'react';

const Button = ({ value, bg}) => {
  return (
    <div className={bg}>
			 {value}
    </div>
  )
}

export default Button;
