import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Balance from "./Balance";
import Data from "./Data";
import Deposit from "./Deposit";
import Form from "./Form";
import Home from "./Home";
import Login from "./Login";
import Withdraw from "./Withdraw";

const NavbarComponent = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Badbank
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
                <Nav.Link as={Link} to={"/signup"}>
                  Create Account
                </Nav.Link>
                <Nav.Link as={Link} to={"/deposit"}>
                  Deposit
                </Nav.Link>
                <Nav.Link as={Link} to={"/withdraw"}>
                  Withdrawal
                </Nav.Link>
                <Nav.Link as={Link} to={"/balance"}>
                  Balance
                </Nav.Link>
                <Nav.Link as={Link} to={"/data"}>
                  All Data
                </Nav.Link>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Form />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/balance" element={<Balance />} />
          <Route exact path="/data" element={<Data />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavbarComponent;
