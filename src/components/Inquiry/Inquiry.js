import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Inquiry = () => {

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    }

    return (
        <>
            <Container>
                <Row sm={1} md={2} className="g-3 my-3">
                    <Col className="mx-auto">
                        <h3 className='text-center mb-3'>Customer Inquiry</h3>

                        <Form onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Customer Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email Address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Number"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="Enter Your Contact Number" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Enter Your Address" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a message here"
                                />
                            </FloatingLabel>

                            <Button type='submit' variant='primary' className='my-2' >Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Inquiry;