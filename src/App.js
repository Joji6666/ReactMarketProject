import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import { useState } from "react";
import Products from "./products";
import products from "./product-data";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">JinsShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Notices</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Products />
    </div>
  );
}

export default App;
