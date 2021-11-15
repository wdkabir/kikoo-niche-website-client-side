import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products] = useProducts();
    return (
        <section>
            <div>
            <Container>
                <Row xs={1} md={4} className="g-4 py-3">
                    {
                        products.map(addproduct => <Product allproduct={addproduct}></Product> )
                    }
                </Row>
            </Container>
            </div>
        </section>
        
    );
};

export default Products;