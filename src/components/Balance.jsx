import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "./context";

const Balance = () => {
  const { balance } = useGlobalContext();
  return (
    <div style={{ marginTop: "10rem" }}>
      <Container>
        <Row className="justify-content-md-center">
          <Card
            text="white"
            style={{ width: "25rem" }}
            className="mb-2"
            bg="warning"
          >
            <Card.Header
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Balance
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <form>
                  <div className="formGroup">
                    <Row>
                      <Col style={{ color: "black", fontWeight: "bold" }}>
                        Balance
                      </Col>
                      <Col style={{ color: "black", fontWeight: "bold" }}>
                        ${balance}
                      </Col>
                    </Row>
                  </div>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Balance;
