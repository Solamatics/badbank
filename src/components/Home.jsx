import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div style={{marginTop: "60px"}}>
      <Container style={{ marginTop: "10px" }}>
        <Row>
          <Col>
            <h1>Welcome to BadBank</h1>
            <p>You can move around using the navigation ba</p>
            <p>Check through all our services clicking through</p>
            <p>You can move around using the navigation ba</p>
            <p>Check through all our services clicking through</p>
          </Col>
          <Col>
            <Image name="fluid" src="assets/brand-image.jpg" alt="brand" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
