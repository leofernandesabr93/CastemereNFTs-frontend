import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Error from "./pages/error/Error"
import Navbar from "./components/general/navbar/Navbar"
import LoginModal from "./components/specific/loginModal/LoginModal"
import Market from "./pages/market/Market"
import SpecificProduct from "./pages/specificProduct/SpecificProduct"
import { useState, useEffect } from "react"

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/market" Component={Market}/>
        <Route path="*" Component={Error}/>
        <Route path="/:productId" element={<SpecificProduct user={user}/>}/>
      </Routes>
      <LoginModal setUser={setUser}/>
    </BrowserRouter>
  )
}

export default App
