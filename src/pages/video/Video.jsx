import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchApi } from '../../utils/api';
import Loader from "react-js-loader";


const Video = () => {

    const { t, i18n } = useTranslation()
    const [videoSources, setData] = useState([])
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        const fetchDataVideos = async () => {
            const res = await fetchApi('api/videos', i18n.language)
            const service = res?.data
            setData(service)
            SetLoading(false)
        }

        fetchDataVideos()
    }, [i18n.language])

    return (
        <section className='px-10 py-20'>
            <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>Our Videos </p>
                <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
                    {t("Explore Awesome Videos")}</h3>

            </div>


            {
                loading ? (
                    <div className=' mt-20 flex justify-center items-center'>
                        <Loader type="bubble-scale" bgColor={'#f7c35f'} color={'red'} title={""} size={100} />
                    </div>
                ) : (
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
                )
            }

        </section>
    )
}

export default Video