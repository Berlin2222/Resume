import React from "react";
import "../App.css";

export default function Input({ label, ...props }) {
  return (
    <div className="container3">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}
