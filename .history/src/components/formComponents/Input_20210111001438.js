import React from 'react';

const Input = ({ type, onChange, placeholder}) => {
  return (
    <div className="input">
			<input className="input-search" type={type} placeholder={placeholder} onChange={onChange} required />
    </div>
  )
}

export default Input;
