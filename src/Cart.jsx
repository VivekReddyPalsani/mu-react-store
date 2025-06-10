import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { useState } from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const Navigate = useNavigate();
    const {cart, setCart, email, orders, setOrders} = useContext(AppContext);
    const incr = () => {
        setCart({...cart, qty: cart.qty + 1})
    }
    const decr = () => {
        cart.qty > 0 && setCart({...cart, qty: cart.qty - 1})
    }
    const handleLogin = () => {
        Navigate("/login");
    }

    const placeholder = () => {
        setOrders([...orders, cart]);
        setCart({});
        Navigate("/order");
    }
  return (
    <div>
        <h2>My Cart</h2>
        {Object.keys(cart).length > 0 ? (
        <>
        <div className='App-Cart-Row'>
            <div>
                <img src={cart.imgUrl} alt={cart.name} />
                <h2>{cart.name}</h2>
                <p>{cart.desc}</p>
                <h4>${cart.price}</h4>
                <div style={{display: "flex"}}>
                    <p><button onClick={decr}>-</button></p>
                    {cart.qty}
                    <p><button onClick={incr}>+</button></p>
                </div>
            </div>   
        </div>
        <hr />
        <h2>Order Value :- ${cart.qty * cart.price}</h2>
        <hr />
        <p>
            {email ? <button onClick={placeholder}>Place Order</button> : <button onClick={handleLogin}>Login to Order</button>}
        </p>
        </>) : (<h3>Your cart is empty</h3>)}
    </div>
    
  )
}
