import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { sliderData } from '../../../data';
import { Link } from 'react-router-dom';


const Slider = () => {

    const [show, setShow] = useState(false)

    return (
        <section className='relative z-0'>

            <Swiper
                className="static"

                loop={true}
                autoplay={{ delay: 5000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}

            >

                {show && <>

                    <div className="swiper-button-next  text-white"></div>
                    <div className="swiper-button-prev text-white  " ></div>

                </>}
                {
                    sliderData.map((slide, index) => (
                        <SwiperSlide onMouseOver={() => setShow(true)}  onMouseOut={()=>setShow(false)}key={index} className="swiper-slide relative">
                            <div className='relative'>
                                <img className='w-full h-[70vb] lg:h-[130vb]' alt='img' src={slide.img} />
                                <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'></div>

                            </div>
                            <div className='absolute top-7 lg:top-44 start-10 lg:start-64  lg:w-[55%]'>
                                <h2 className='font-IntoLightTw0 text-lg lg:text-8xl text-white'>{slide.heading}</h2>
                                <p className=' lg:mt-16 mb-10 text-white  font-Outfit text-[12px] lg:text-[17px]  font-semibold lg:font-bold w-[80%]'>{slide.desc}</p>
                                <Link to={'/'} className='bg-primary_color font-Outfit text-base lg:text-xl  text-color_heading  lg:font-[600] py-2 lg:py-5 px-4 lg:px-10 rounded-md hover:bg-secondary_color'>Discover More</Link>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </section>
    )
}

export default Slider