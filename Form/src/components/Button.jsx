import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={onClick} className="show-form-btn">Add Profile</button>
    </div>
  );
};

export default Button;
