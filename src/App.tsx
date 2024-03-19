import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Github from './Components/Github/Github'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="github" element={<Github />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
