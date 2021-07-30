import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Col xs={12} sm={12}>
          Hecho con ♥
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
