import React from 'react';

const Button = ({ value, bg}) => {
  return (
		<div className="button">
			<div className={bg}>
				{value}
			</div>
		</div>
  )
}

export default Button;
