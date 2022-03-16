import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "./context";

const Withdraw = () => {
  const {
    handleClick,
    balance,
    amount,
    withdrawAmount,
    handlechange,
    handleWithdrawClick,
    handleWithdrawalChange,
  } = useGlobalContext();
  return (
    <div style={{ marginTop: "10rem" }}>
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
                      <Col style={{ color: "black", fontWeight: "bold" }}>
                        Balance
                      </Col>
                      <Col style={{ color: "black", fontWeight: "bold" }}>
                        ${balance}
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
                            Withdraw Amount
                          </label>
                          <input
                            type="text"
                            id="withdraw"
                            name="withdraw"
                            value={withdrawAmount}
                            placeholder="Withdraw Amount"
                            onChange={handleWithdrawalChange}
                          />
                        </div>
                      </Row>
                    </Col>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "white", backgroundColor: "gray" }}
                    onClick={handleWithdrawClick}
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
