import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpeg'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { fetchApi } from '../../utils/api'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'
import i18n from '../../languages/i18n'

const About = () => {

    const { t } = useTranslation()
    const [About, setData] = useState()

    useEffect(() => {
        const fetchDataSlider = async () => {
            const res = await fetchApi('api/about-us', i18n.language)
            const aboutData = res?.data
            setData(aboutData)
        }

        fetchDataSlider()
    }, [i18n.language])


    function removeEmptyPTags(str) {
        return str?.replace(/<\/?(em|p|br|ul|li|a|span|strong|u)[^>]*>|&nbsp;/g, '');
      }
      const sanitizedContent = DOMPurify.sanitize(t(About?.details), {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'style']
    });




    return (
        <section className='px-10 lg:px-16 py-20'>
            <div className=' block lg:flex gap-24 '>
                <div className='lg:w-[50%]'>
                    <img className='rounded-lg lg:rounded-tl-[15rem] lg:rounded-br-[15rem]' alt='img' src={About?.photo} />
                </div>
                <div className='lg:w-[50%] lg:mt-20 text-center lg:text-start'>
                    <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>{t(About?.title)}</h2>


                    <div className='text-gray-500 font-[500] font-Outfit text-lg leading-10 ' dangerouslySetInnerHTML={{__html:sanitizedContent}}/>

                    {/* <div className=' block lg:flex  gap-5 mt-5'>
                        <div className='w-full  lg:h-72 rounded-lg bg-primary_color px-14 pt-10 pb-10'>
                            <img alt='img' className='w-16' src={img2} />
                            <h3 className='font-Outfit lg:text-xl font-semibold mt-4'>100% Guaranteed Organic Product</h3>
                            <p className='font-Outfit text-sm font-semibold mt-4'>
                                Always parties but trying she shewing of moment.</p>
                        </div>
                        <div className='w-full lg:h-72 rounded-lg bg-secondary_color px-14 pt-10 mt-10 lg:mt-0 pb-10'>
                            <img alt='img' className='w-16' src={img3} />
                            <h3 className='font-Outfit lg:text-lg font-semibold mt-4 text-white'>Top-Quality Healthy Foods Production</h3>
                            <p className='font-Outfit text-sm font-semibold mt-4 text-white'>
                                Majority have suffered alteration in some form by injected humor.</p>
                        </div>

                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default About