import React from "react";
import "./button.css";

const CustomButton = ({ texto, color }) => {
  return (
    <button style={{ backgroundColor: color }} className="CustomButton">
      {texto}
    </button>
  );
};

export default CustomButton;
