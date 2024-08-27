import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Slider from '../../components/slider/Slider'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Contact from '../../components/contact/Contact'
import Product from '../../components/product/Product'
import Videos from '../../components/video/Videos'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <section>
        <Slider/>
        <About/>
        <Services/>
        <Contact/>
        <Product/>
        <Videos/>
    </section>
  )
}

export default Home