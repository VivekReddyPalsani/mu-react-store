import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState, createContext } from "react";
import Cart from "./Cart";
export const AppContext = createContext();
import Order from "./Order";

function App() {
  const [cart, setCart] = useState({});
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState();
  
  return (
    <div>
      <AppContext.Provider value={{users, setUsers, cart, setCart, email, setEmail, orders, setOrders}}>
        <BrowserRouter>
          <Header name="mu-react-store" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/order" element={<Order />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;