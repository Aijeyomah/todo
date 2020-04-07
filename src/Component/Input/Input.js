import React, { useState } from "react";
import "./Input.css"

const Input = ({ name, value, handleChange }) => {
  return (
    <div>
      <input
      className="input"
        type="text"
        placeholder="What needs to be done?"
        name={name}
        value={value}
        onChange={handleChange}
      />
      
    </div>
  );
};
export default Input;
