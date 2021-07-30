import React from "react";
import "./intro.css";
import luz from "./luz.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
// import CustomButton from "../button/customButton";

const Intro = ({ titulo }) => {
  return (
    <header>
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <img className="icon" src={luz}></img>
          </Col>
          <Col className="texto-intro" xs={12} sm={8}>
            <h1>{titulo}</h1>
            <p className="Descripcion">
              Ingeniera de Sistemas, Desarrolladora FullStack en formación 💻 y
              Amante de los Gatos 🐱
            </p>
            <Button variant="info" href="./contacto" ClassName="boton">
              Contactame
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Intro;
