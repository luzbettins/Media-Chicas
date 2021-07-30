import React from "react";
import "./home.css";
import Intro from "../intro/intro";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html5 from "./html5.png";
import js from "./js.png";
import react from "./react.png";
import bootstrap from "./bootstrap.png";
import css from "./css-3.png";
import python from "./python.png";

const Home = () => {
  return (
    <div className="home">
      <Intro titulo="Luz Bettin" />
      <Container>
        <h2 className="titulo-skill">Skills</h2>
        <Row>
          <Col xs="auto">
            <img className="skill" src={html5}></img>{" "}
          </Col>
          <Col xs="auto">
            <img className="skill" src={css}></img>{" "}
          </Col>
          <Col xs="auto">
            <img className="skill" src={js}></img>{" "}
          </Col>
          <Col xs="auto">
            <img className="skill" src={bootstrap}></img>{" "}
          </Col>
          <Col xs="auto">
            <img className="skill" src={react}></img>{" "}
          </Col>
          <Col xs="auto">
            <img className="skill" src={python}></img>{" "}
          </Col>
        </Row>

        <h2 className="titulo-skill">Formación Academica</h2>
        <ul className="estudios">
          <li>Ingeniería de Sistemas, 2015 - 2021)</li>
          <li>Codear Futur@, 2021</li>
          <li>Workshop Introducción a la Programación Frontend, 2020</li>
          <li>Semillero de Emprendimiento Digital (SEED), 2020</li>
        </ul>
      </Container>

      {/* <Link to="/contacto">Ir a contacto!</Link> */}
    </div>
  );
};

export default Home;
