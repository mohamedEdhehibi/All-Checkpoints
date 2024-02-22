import React from 'react';
import productData from '../product';

const Image = () => {
    return <img src={productData.image} alt={productData.name} />;
};

export default Image;
