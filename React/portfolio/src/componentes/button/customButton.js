import React from "react";
import "./button.css";

const CustomButton = ({ texto }) => {
  return (
    <button type="submit" href="/contacto" className="customButton">
      {texto}
    </button>
  );
};

export default CustomButton;
