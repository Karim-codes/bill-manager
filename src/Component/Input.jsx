import React from "react";
import "./Input.css"; // Ensure this path is correct

function Input(props) {
  return (
    <div className="input-container">
      <label>
        {props.title}:
        <input
          type={props.type}
          name={props.name}
          placeholder="Enter amount"
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

export default Input;
