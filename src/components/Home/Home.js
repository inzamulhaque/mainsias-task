import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Home = () => {
    const [products] = useProducts();
    return (
        <>
            <Container>
                <Row sm={1} md={2} lg={3} className="g-3 my-3">
                    {
                        products?.map(product => <Product key={product.id} product={product} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;