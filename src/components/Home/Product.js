import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    return (
        <>
            <Col>
                <Card style={{ height: "100%" }}>
                    <Card.Img variant="top" src={product.img} style={{ height: "300px" }} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            ₹{product.price}
                        </Card.Text>
                        <Button onClick={() => navigate(`/buyproduct/${product.id}`)} variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Product;