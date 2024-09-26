import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Contact from "./components/Contact/contact"
import Blog from "./components/Works/Blog"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/works' element={<Blog />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
