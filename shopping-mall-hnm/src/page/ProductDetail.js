import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    setLoading(true);
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setLoading(false);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) return <h1>Loading</h1>;
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product.img} />
          </Col>
          <Col>
            <div className="product-info">{product.title}</div>
            <div className="product-info">₩ {product.price}</div>
            <div className="choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>{product.size}</Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
