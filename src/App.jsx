import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Error from "./pages/error/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
