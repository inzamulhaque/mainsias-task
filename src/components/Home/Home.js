import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
    return (
        <>
            <Container>
                <Row>

                </Row>
            </Container>
        </>
    );
};

export default Home;