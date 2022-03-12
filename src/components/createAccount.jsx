import React, { useState, useEffect } from "react";
import { Card, Container, Row, Modal } from "react-bootstrap";
import validation from "./validation";

const CreateAccount = ({ submitForm }) => {
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState({ initialValues });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  //handle submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  //handle input chnages
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const getFormValues = () => {
    const storedValues = localStorage.getItem('form');
    if(!storedValues) return {
      email: "",
      password: "",
    }
    return JSON.parse(storedValues)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
    localStorage.setItem("form", JSON.stringify(values));
  }, [errors]);

  return (
    <div style={{ marginTop: "5rem" }}>
    <pre>{JSON.stringify(values, undefined, 2)}</pre>
      {Object.keys(errors).length === 0 && dataIsCorrect ? (
        <Modal.Dialog>
          <Modal.Body>
            <p style={{ textAlign: "center" }}>Signed in successfully</p>
          </Modal.Body>
        </Modal.Dialog>
      ) : (
        ""
      )}
      <Container>
        <Row className="justify-content-md-center">
          <Card
            text="white"
            style={{
              width: "30rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="mb-2"
          >
            <Card.Header
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Create Account
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <form>
                  <div className="formGroup">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className="formGroup">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="formGroup">
                    <label for="country">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "white", backgroundColor: "gray" }}
                    onClick={handleSubmit}
                  >
                    Create Account
                  </button>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* <SignupFormSuccess name={} /> */}
        </Row>
      </Container>
    </div>
  );
};

export default CreateAccount;
