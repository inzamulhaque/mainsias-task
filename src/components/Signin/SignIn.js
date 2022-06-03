import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser || githubUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser, githubUser]);

    const handleSignIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            <Container>
                <Row sm={1} md={2} className="my-3">
                    <Col className="mx-auto">
                        <h3 className="text-center mb-3">Sign In</h3>
                        <Form onSubmit={handleSignIn}>
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

                            <Button variant='primary' type="submit" className="my-2">SignIn</Button>

                        </Form>

                        <div className="">
                            <p>You've No Account? <span className="text-primary btn btn-link" onClick={() => navigate("/signup")}>Sign Up</span> </p>
                        </div>

                        <div className="orLine my-3">
                            <div className="line"></div>
                            <div className="text-center text-[22px] font-normal">OR</div>
                            <div className="line"></div>
                        </div>

                        <Button variant="danger" className="d-block mx-auto my-2" onClick={() => signInWithGoogle()}>Sign In With Google</Button>
                        <Button variant="dark" className="d-block mx-auto my-2" onClick={() => signInWithGithub()} >Sign In With GitHub</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SignIn;