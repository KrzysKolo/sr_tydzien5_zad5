import React from 'react';

const Button = ({ value, bg}) => {
  return (
		<div className={'button {bg}'}>
			{value}
		</div>
  )
}

export default Button;
