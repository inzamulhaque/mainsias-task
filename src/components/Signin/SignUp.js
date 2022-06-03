import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        signOut(auth);
        navigate("/signin");
    }

    return (
        <>
            <Container>
                <Row sm={1} md={2} className="my-3">
                    <Col className="mx-auto">
                        <h3 className="text-center mb-3">Sign Up</h3>
                        <Form onSubmit={handleSignUp}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email Address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" name="email" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </FloatingLabel>

                            <Button variant='primary' type="submit" className="my-2">SignUp</Button>

                        </Form>

                        <div className="">
                            <p>You've Account? <span className="text-primary btn btn-link" onClick={() => navigate("/signin")}>Sign In</span> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SignUp;