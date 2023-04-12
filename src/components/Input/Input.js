import React from "react";
import "./Input.css";

export default function Input(props) {
  const {
    size = "small",
    children,
    placeholder,
    onChange,
    type,
    value,
    ...rest
  } = props;

  return (
    <input
      className={`input ${size}`}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
}
