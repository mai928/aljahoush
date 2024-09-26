import React from 'react'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import 'swiper/css/autoplay'

import { Link } from 'react-router-dom';
import { services } from '../../../data';
import DOMPurify from 'dompurify';
import { fetchApi } from '../../utils/api';
import { useTranslation } from 'react-i18next';



const Services = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    const { t, i18n } = useTranslation()

    const [isHover, setHovered] = useState(false);
    const [Id, setID] = useState("");

    const handleHoverOn = (id) => {
        setHovered(true);
        setID(id);
    };



    const breakpoints = {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };


    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);


    // api/services

    const [services, setData] = useState([])

    useEffect(() => {
        const fetchDataSlider = async () => {
            const res = await fetchApi('api/services', i18n.language)
            const service = res?.data
            setData(service)
        }

        fetchDataSlider()
    }, [i18n.language])

    const sanitizedContent = DOMPurify.sanitize(t(services.details), {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'style']
    });






    return (
        <section className="py-10 lg:py-12 px-5 lg:px-20  bg-gray-100">
            <div>
                <div className="py-5 text-center ">
                    <div className="flex  justify-center items-center mb-3">

                        <p className="text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl">
                            {t("OUR Services")}
                        </p>
                    </div>

                    <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit">
                        {t("Currently we are")} <br /> {i18n.language === 'ar'?(''):("selling organic food")}
                    </h3>
                </div>

                <Swiper
                    dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    key={i18n.language}
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={4}
                    breakpoints={breakpoints}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    speed={1000}
                >
                    <div>
                        {services?.map((item, index) => (
                            <SwiperSlide key={index} className=" mt-5">

                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img className='w-full h-64 object-cover rounded-md' alt={'img'} src={item?.photo} />
                                    <div className="p-3">
                                        <h2 className="text-xl font-bold font-Outfit  mb-2 mt-4">{t(item.title)}</h2>
                                        {/* truncateText(item?.details || '', 20) */}
                                        <div className="text-paragraph_color text-base font-Outfit font-[500] mb-4" dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(t(truncateText(item.details,8)), {
                                                ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
                                                ALLOWED_ATTR: ['href', 'target', 'style']
                                            })
                                        }} />

                                        {/* ${encodeURIComponent(item.slug) */}
                                        <Link to={`/single-service/${item?.slug}`} className={''} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} className='svg-right bg-primary_color p-5 rounded-full hover:bg-secondary_color' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
                <div className="flex justify-center mt-10">
                    <Link to={'/services'} className={'w-36  md:w-48 lg:w-56 py-3 font-Outfit font-bold text-xl bg-primary_color hover:bg-secondary_color hover:text-white rounded-full text-center'} >{t("Show More")}</Link>
                </div>
            </div>
        </section>
    )
}

export default Services







