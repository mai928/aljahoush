import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchApi } from '../../utils/api'
import DOMPurify from 'dompurify'
import Loader from "react-js-loader";

const About = () => {


    const { t, i18n } = useTranslation()
    const [About, setData] = useState('')
    const [loading, SetLoading] = useState(true)


    const sanitizedContent = DOMPurify.sanitize(t(About.details), {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'style']
    });

    useEffect(() => {
        const fetchDataSlider = async () => {
            const res = await fetchApi('api/about-us', i18n.language)
            const aboutData = res?.data
            setData(aboutData)
            SetLoading(false)
        }

        fetchDataSlider()
    }, [i18n.language])

    function removeEmptyPTags(str) {
        return str?.replace(/<\/?(em|p|br|ul|li|a|span|strong|u)[^>]*>|&nbsp;/g, '');
    }

    return (
        <>
            {
                loading ? (<div className=' mt-20 flex justify-center items-center'>
                    <Loader type="bubble-scale" bgColor={'#f7c35f'} color={'red'} title={""} size={100} />
                </div>) : (<section className='px-10 lg:px-16 py-20'>
                    <div className=' block lg:flex gap-24 '>
                        <div className='lg:w-[50%]'>
                            <img className='rounded-lg lg:rounded-tl-[15rem] lg:rounded-br-[15rem]' alt='img' src={About?.photo} />
                        </div>
                        <div className=' lg:w-[50%] lg:mt-20 text-center lg:text-start'>
                            <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>{About?.title}</h2>
                            {/* <p className='text-gray-500 font-[500] font-Outfit '>{removeEmptyPTags(About?.details)}
                        </p> */}

                            <div className='text-gray-500 font-[500] font-Outfit text-[20px]  leading-10' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />


                        </div>

                    </div>
                </section>)
            }
        </>

    )
}

export default About