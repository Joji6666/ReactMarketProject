import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import { useState } from "react";
import products from "./product-data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import DetailPage from "./detail/detail";
import Products from "./products";

function App() {
  let nav = useNavigate();
  let [product, setProduct] = useState(products);

  return (
    <div className="App">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand>
            <Nav.Link
              onClick={() => {
                nav("/");
              }}
            >
              JinsShop
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                nav("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                nav("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                nav("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                nav("/event");
              }}
            >
              Events
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              {product.map((a, i) => {
                return (
                  <Link to={"/detail"}>
                    <Products product={product[i]}></Products>
                  </Link>
                );
              })}
            </div>
          }
        />
        <Route
          path="/detail"
          element={<DetailPage product={product} />}
        ></Route>
        <Route path="/about" element={<h4>정보</h4>}></Route>
        <Route path="/*" element={<h4>없는 페이지 입니다.</h4>}></Route>
        <Route
          path="/event"
          element={
            <>
              <h4>이벤트 페이지</h4>
              <Link to={"/event/one"}>
                <p>1</p>
              </Link>
              <Link to={"/event/two"}>
                <p>2</p>
              </Link>
              <Outlet></Outlet>
            </>
          }
        >
          <Route
            path="one"
            element={
              <div>
                <h4>오늘의 이벤트</h4>
                <p>첫 주문시 양베추즙 서비스</p>
              </div>
            }
          />
          <Route
            path="two"
            element={
              <div>
                <h4>오늘의 이벤트</h4>
                <p>생일기념 쿠폰받기</p>
              </div>
            }
          />
        </Route>
        {/* Nested Routes 활용 */}
      </Routes>
    </div>
  );
}

export default App;
