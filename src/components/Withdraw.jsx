import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Withdraw = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Container>
        <Row className="justify-content-md-center">
          <Card
            text="white"
            style={{ width: "25rem" }}
            className="mb-2"
            bg="light"
          >
            <Card.Header
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Withdraw
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <form>
                  <div className="formGroup">
                    <Row>
                      <Col>Balance</Col>
                      <Col>$100</Col>
                    </Row>
                  </div>
                  <div className="formGroup">
                    <Col>
                      <Row>
                        <div className="formGroup">
                          <label for="email" style={{ color: "black" }}>
                            Withdraw Amount
                          </label>
                          <input
                            type="text"
                            id="withdraw"
                            name="withdraw"
                            placeholder="Withdraw Amount"
                          />
                        </div>
                      </Row>
                    </Col>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "white", backgroundColor: "gray" }}
                  >
                    Withdraw Amount
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

export default Withdraw;
