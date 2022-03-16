import React, { useState, useEffect } from "react";
import { Card, Container, Row, Modal, Button } from "react-bootstrap";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues);
  };

  //validate form values
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password cannot be less then 5";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <div style={{ marginTop: "10rem" }}>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <Modal.Dialog>
          <Modal.Body>
            <p style={{ textAlign: "center" }}>Signed in successfully</p>
          </Modal.Body>
        </Modal.Dialog>
      ) : (
        // <h1>Signed in successfully</h1>
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        ""
      )}

      <Container>
        <Row className="justify-content-md-center">
          <Card
            text="white"
            style={{ width: "25rem" }}
            className="mb-2"
            bg="light"
          >
            <Card.Header style={{ color: "white", textAlign: "center" }}>
              Login
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <form onSubmit={handleSubmit}>
                  <div className="formGroup">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                  <div className="formGroup">
                    <label for="country">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red" }}>{formErrors.password}</p>
                  <button
                    type="submit"
                    className="btn"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    Login
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

export default Login;
