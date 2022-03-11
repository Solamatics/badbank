import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Deposit = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
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
              Deposit
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
                        $100
                      </Col>
                    </Row>
                  </div>
                  <div className="formGroup">
                    <Col>
                      <Row>
                        <div className="formGroup">
                          <label
                            for="email"
                            style={{ color: "black", fontWeight: "bold" }}
                          >
                            Deposit Amount
                          </label>
                          <input
                            type="text"
                            id="deposit"
                            name="deposit"
                            placeholder="Deposit Amount"
                          />
                        </div>
                      </Row>
                    </Col>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    Deposit
                  </button>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Deposit;
