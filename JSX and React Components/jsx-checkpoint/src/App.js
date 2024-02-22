import React from 'react';
import ProductCard from './components/ProductCard';
import productData from './product';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
 
  return (
    <div className="container">
      <ProductCard productData={productData} />
    
    </div>
  );
};

export default App;

