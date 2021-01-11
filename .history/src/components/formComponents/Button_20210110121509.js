import React from 'react';

const Button = ({ values, bg, onClick }) => {
  return (
		<div className={`button ${bg}`} onClick={onClick}>
			{values}
		</div>
  )
}

export default Button;
