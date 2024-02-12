import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Navbar from "./components/general/navbar/Navbar";
import LoginModal from "./components/specific/loginModal/LoginModal";
import Market from "./pages/market/Market";
import SpecificProduct from "./pages/specificProduct/SpecificProduct";
import { useState, useEffect } from "react";
import Fav from "./pages/fav/Fav";
import Cart from "./pages/cart/cart";
import SearchModal from "./components/specific/searchModal/SearchModal";
import Footer from "./components/general/footer/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [productId, setProductId] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0)
  const [favItemCount, setFavItemCount] = useState(0)

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar productId={productId} user={user} setUser={setUser} setCartItemCount={setCartItemCount} setFavItemCount={setFavItemCount} cartItemCount={cartItemCount} favItemCount={favItemCount}/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/market" Component={Market} />
        <Route path="*" Component={Error} />
        <Route path="/:productId" element={<SpecificProduct user={user} setProductId={setProductId} setCartItemCount={setCartItemCount} setFavItemCount={setFavItemCount} />} />
        <Route path="/favoritos" element={user ? <Fav user={user} setUser={setUser} setFavItemCount={setFavItemCount} favItemCount={favItemCount}/> : <Home/>}/>
        <Route path="/carrito" element={user ? <Cart user={user} setUser={setUser} setCartItemCount={setCartItemCount} cartItemCount={cartItemCount}/> : <Home/>} />
      </Routes>
      <LoginModal setUser={setUser} />
      <SearchModal/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
