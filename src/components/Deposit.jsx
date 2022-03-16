import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "./context";

const Deposit = () => {
  const { handleClick, balance, amount, handleChange } = useGlobalContext();
  // console.log(data);
  // const [balance, setBalance] = useState(0);
  // const [amount, setAmount] = useState(0);

  //handleClick
  // const handleClick = (e) => {
  //   e.preventDefault();

  //   //increment the amount of deposit made
  //   setBalance(parseInt(balance) + parseInt(amount));
  //   setAmount("");
  // };

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
                            Deposit Amount
                          </label>
                          <input
                            type="text"
                            id="deposit"
                            name="deposit"
                            value={amount}
                            placeholder="Deposit Amount"
                            onChange={handleChange}
                          />
                        </div>
                      </Row>
                    </Col>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "black", backgroundColor: "white" }}
                    onClick={handleClick}
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
