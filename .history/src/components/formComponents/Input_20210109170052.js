import React from 'react';

const Input = ({placeholder}) => {
  return (
    <div className="input">
			<input type="text" placeholder={placeholder} required />
    </div>
  )
}

export default Input;
