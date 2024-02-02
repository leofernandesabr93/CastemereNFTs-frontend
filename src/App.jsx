import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Error from "./pages/error/Error"
import Navbar from "./components/general/navbar/Navbar"
import LoginModal from "./components/specific/loginModal/LoginModal"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="*" Component={Error}/>
      </Routes>
      <LoginModal/>
    </BrowserRouter>
  )
}

export default App
