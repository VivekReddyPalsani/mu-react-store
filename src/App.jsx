import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Home from "./Home";
import Cart from "./Cart";
import Order from "./Order";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
export const AppContext = createContext();


function App() {
  const [cart, setCart] = useState({});
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState();
  
  return (
    <div>
      <AppContext.Provider value={{users, setUsers, cart, setCart, email, setEmail, orders, setOrders}}>
        <BrowserRouter>
          <Header name="MU-React-Store" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;