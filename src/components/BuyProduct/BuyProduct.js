
import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BuyProduct = () => {
    const navigate = useNavigate();

    const handleBook = event => {
        event.preventDefault();
        navigate("/");
    }

    return (
        <>
            <Container>
                <Row sm={1} md={2}>
                    <Col className="mx-auto">
                        <h3 className="text-center mb-3">Buy Now</h3>
                        <Form onSubmit={handleBook}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email Address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Address" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Number"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="Phone Number" />
                            </FloatingLabel>


                            <Button variant='primary' type="submit" className="my-2">Buy Now</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BuyProduct;