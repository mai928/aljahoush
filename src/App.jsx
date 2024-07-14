
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Service from './pages/service/Service'
import Products from './pages/product/Products'
import ContactUs from './pages/contact/ContactUs'
import Video from './pages/video/Video'
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/videos' element={<Video/>} />
        <Route path='/contact' element={<ContactUs/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


export default App
