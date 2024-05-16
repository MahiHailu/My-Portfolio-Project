import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
    return (
        <div>
            <h1>Agricultural Product Supply Chain</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default App;
