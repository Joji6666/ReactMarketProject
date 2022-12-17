import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import products from "./product-data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import DetailPage from "./detail/detail";
import Products from "./products";
import Cart from "./cart";

function App() {
  let nav = useNavigate();
  let [product, setProduct] = useState(products);
  let [btnCount, setBtnCount] = useState(1);

  useEffect(() => {
    if (btnCount == 3) {
      alert("더이상 상품이 없습니다.");
      setBtnCount((btnCount = null));
    }
  });

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
                nav("/cart");
              }}
            >
              Cart
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
                  <Link to={`/detail/${product.id}`}>
                    <Products product={product[i]}></Products>
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  let 정렬글제목 = [...product];
                  정렬글제목.sort(function (a, b) {
                    return a.price - b.price;
                  });
                  setProduct(정렬글제목);
                }}
              >
                가격 낮은 순
              </button>
              <button
                onClick={() => {
                  setBtnCount(btnCount + 1);
                  console.log(btnCount);
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let resultData = [...product, ...result.data];
                      setProduct(resultData); // ...을 이용한 데이터 추가 방법

                      if (btnCount == 2) {
                        axios
                          .get("https://codingapple1.github.io/shop/data3.json")
                          .then((result2) => {
                            let resultData2 = [...product, ...result2.data];
                            setProduct(resultData2);
                          });
                      }

                      // setProduct(product.concat(result.data));  데이터 추가 방법 1 concat 이용
                    })
                    .catch((error) => {
                      console.error("에러발생");
                    });
                }}
              >
                더보기
              </button>
            </div>
          }
        />
        <Route
          path="/detail/:id"
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
