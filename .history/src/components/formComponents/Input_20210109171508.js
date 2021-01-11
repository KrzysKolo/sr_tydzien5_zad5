import React from 'react';

const Input = ({placeholder}) => {
  return (
    <div className="input">
			<input className="input-search" type="text" placeholder={placeholder} required />
    </div>
  )
}

export default Input;
