import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchApi } from '../../utils/api';

const Video = () => {

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
    <section className='px-10 py-20'>
    <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>Our Videos </p>
        <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
            Explore Awesome Videos</h3>

    </div> 
    <div className='block lg:flex flex-wrap justify-center gap-6' >
                {
                    videoSources.map((vid, index) => (
                        <video
                            key={index}
                            src={vid.media}
                            controls={true}
                            autoplay={false}
                            loop={false}
                            muted={false}
                            className='w-[500px] h-[250px]  object-cover'
                        />
                    ))
                }
            </div>
</section>
  )
}

export default Video