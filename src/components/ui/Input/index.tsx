import React from 'react';

const Input = ({ type, placeholder, required }) => (
  <div className="form-group">
    <input type={type} className="form-control rounded-left" placeholder={placeholder} required={required} />
    
  </div>
);

export default Input;