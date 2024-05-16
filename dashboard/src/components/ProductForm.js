import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [farmer, setFarmer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/products', {
            name,
            price,
            description,
            quantity,
            farmer
        })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div>
                <label>Farmer:</label>
                <input type="text" value={farmer} onChange={(e) => setFarmer(e.target.value)} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
