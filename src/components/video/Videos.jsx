import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchApi } from '../../utils/api';
import { Link } from 'react-router-dom';

const Videos = () => {
    const {t , i18n}=useTranslation()
    const [videoSources,setData]=useState([])

    useEffect(()=>{
        const fetchDataVideos = async () => {
            const res = await fetchApi('api/videos', i18n.language)
            const service = res?.data
            setData(service)
        }
    
        fetchDataVideos()
    },[i18n.language])


    return (
        <section className='px-5 py-20'>
            <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>{t("Our Videos")}</p>
                <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
                    {t("Explore Awesome Videos")}</h3>

            </div> 
                       <div className='block  lg:flex flex-wrap justify-center gap-6' >
                {
                    videoSources?.slice(0,2)?.map((vid, index) => (
                        <video
                            key={index}
                            src={vid.media}
                            controls={true}
                            autoplay={false}
                            loop={false}
                            muted={false}
                            className='w-[500px] h-[280px]  object-cover mt-10 lg:mt-0'
                        />
                    ))
                }
            </div>
            <div className='m-auto text-center my-10 '>
                <Link to={'/videos'} className=' bg-primary_color hover:bg-secondary_color hover:text-white  text-xl  px-14 py-4 rounded-full font-Outfit font-semibold '>{t("Show More")}</Link>

            </div>
        </section>

    )
}

export default Videos