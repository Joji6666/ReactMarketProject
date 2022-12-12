import { useState } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import products from "./product-data";

function Products() {
  let [product, setProduct] = useState(products);

  return (
    <div>
      <div>
        {product.map(function (a, i) {
          return (
            <div className="products">
              <Container>
                <Row>
                  <Col>
                    <div className="product-box">
                      <img src={product[i].img} width="300px" height="300px" />
                      <h4>{product[i].title}</h4>
                      <p>{product[i].price}</p>
                      <p>{product[i].content}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
