import React from "react";
import woman from "./woman.png";
import CustomButton from "../button/CustomButton";
import "./intro.css";

const Intro = ({ nombre }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <img src={woman} className="icon"></img>
      <p>
        Hola, soy Luz, tengo 23 años y estoy preparandome para ser
        Desarrolladora FullStack
      </p>
      <a href="www.google.com">Ir a mi Linkedin</a>
      {/* <br />
      <CustomButton texto="Hola" color="blue" />
      <CustomButton texto="Ir a Linkedin" color="green" /> */}
    </div>
  );
};

export default Intro;
