import React, { useContext } from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

export default function Home() {
  const Navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 45,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 50,
      imgUrl: "https://picsum.photos/id/2/300/300",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 32,
      imgUrl: "https://picsum.photos/id/3/300/300",
    },
  ];
  const {setCart, email} = useContext(AppContext)

  const handleCart = (obj) => {
    setCart({
      id: obj.id,
      name: obj.name,
      price: obj.price,
      desc: obj.desc,
      imgUrl: obj.imgUrl,
      email: email,
      qty: 1,
    })
    Navigate("/cart");
  }

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