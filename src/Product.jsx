import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Product() {
    const [products, setProducts] = useState([]);
    const fetchProduct = async () => {
        const url = "http://localhost:8080/products";
        const res = await axios.get(url);
        setProducts(res.data);
    }
    useEffect(() => {
        fetchProduct();
    }, [])
  return (
    <div className="App-Home-Row">
      {products.map((product) => (
        <div>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>${product.price}</h4>
          <p><button onClick={() => handleCart(product)}>Add to Cart</button></p>
        </div>
      ))}
    </div>
  );
}
