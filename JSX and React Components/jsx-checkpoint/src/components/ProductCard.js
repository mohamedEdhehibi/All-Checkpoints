import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
const ProductCard = ({ productData }) => {
    return (
        <Card className="product-card">
            <Card.Body>
                <Name productData={productData} />
                <Price productData={productData} />
                <Image productData={productData} />
                <Description productData={productData} />
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
