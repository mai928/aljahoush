import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { sliderData } from '../../../data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchApi } from '../../utils/api';
import DOMPurify from 'dompurify'
import Loader from "react-js-loader";




const Slider = () => {

    const { t, i18n } = useTranslation()

    const [show, setShow] = useState(false)
    const [loading, SetLoading] = useState(true)


    const [sliderData, setData] = useState([])

  

    useEffect(() => {
        const fetchDataSlider = async () => {
            const res = await fetchApi('api/sliders', i18n.language)
            const slideData = res?.data
            setData(slideData)
            SetLoading(false)
        }

        fetchDataSlider()
    }, [i18n.language])


    return (
        <section className='relative z-0'
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
        >
            {
                loading ? (
                    <div className=' mt-20 flex justify-center items-center'>
                         <Loader type="bubble-scale" bgColor={'#f7c35f'} color={'red'} title={""} size={100} />
                    </div>
               ) : (<Swiper
                    className="static"
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    key={i18n.language}
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

                    <>

                        <div className={`swiper-button-next  text-white  ${show ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className={`swiper-button-prev text-white ${show ? 'opacity-100' : 'opacity-0'} `}></div>

                    </>
                    {
                        sliderData.map((slide, index) => (
                            <SwiperSlide key={index} className="swiper-slide relative">
                                <div className='relative'>
                                    <img className='w-full h-[65vb] lg:h-[130vb]' loading='eager' alt='img' src={slide.photo} />
                                    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40'></div>

                                </div>

                                <div key={index} className='absolute top-7 lg:top-44 start-10 lg:start-28  lg:w-[60%]'>
                                    <h2 className='font-IntoLightTw0 text-lg lg:text-7xl text-white'>{t(slide.title)}</h2>
                                    {/* <p className=' lg:mt-16 mb-10 text-white  font-Outfit text-[12px] lg:text-[17px]  font-semibold lg:font-bold w-[80%]'>{t(slide.details)}</p> */}
                                    <div className=' lg:mt-16 mb-10 text-white  font-Outfit text-[12px] lg:text-[19px]  font-semibold lg:font-bold w-[80%]' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(slide?.details)) }} />
                                    <Link to={'/services'} className='bg-primary_color font-Outfit text-base lg:text-xl  text-color_heading  lg:font-[600] py-2 lg:py-5 px-4 lg:px-10 rounded-md hover:bg-secondary_color'>{t("Discover More")}</Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>)
            }


        </section>
    )
}

export default Slider