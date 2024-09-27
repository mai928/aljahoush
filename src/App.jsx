
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
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import ServiceDetails from './pages/serviceDetails/ServiceDetails'


function App() {

  const { i18n } = useTranslation()

  // useEffect(() => {
  //   // Function to fetch the icon URL from the API
  //   const fetchIcon = async () => {
  //     try {
  //       const response = await fetch('https://api.aljahoush.com/api/settings');
  //       const data = await response.json();

  //       // Assuming the API returns a URL to the icon
  //       const iconUrl = data.data.favicon;

  //       console.log(iconUrl)

  //       // Update the favicon
  //       const favicon = document.getElementById('favicon');
  //       if (favicon) {
  //         favicon.href = iconUrl;
  //       } else {
  //         // Create a new favicon element if it doesn't exist
  //         const newFavicon = document.createElement('link');
  //         newFavicon.id = 'favicon';
  //         newFavicon.rel = 'icon';
  //         newFavicon.href = iconUrl;
  //         document.head.appendChild(newFavicon);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching the icon:', error);
  //     }
  //   };

  //   fetchIcon();
  // }, []);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
        console.log('Language changed to:', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Clean up the event listener on component unmount
    return () => {
        i18n.off('languageChanged', handleLanguageChange);
    };
}, []);


  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr')
  }, [i18n.language])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service/>} />
        <Route path='/single-service/:slug' element={<ServiceDetails/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/videos' element={<Video />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
