import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpeg'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { useTranslation } from 'react-i18next'
import { fetchApi } from '../../utils/api'
import DOMPurify from 'dompurify'
const About = () => {


    const { t, i18n } = useTranslation()
    const [About, setData] = useState('')

    const sanitizedContent = DOMPurify.sanitize(t(About.details), {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'style']
    });

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

      console.log("sanitizedContent:::",sanitizedContent)
  return (
    <section className='px-10 lg:px-16 py-20'>
    <div className=' block lg:flex gap-24 '>
        <div className='lg:w-[50%]'>
            <img className='rounded-lg lg:rounded-tl-[15rem] lg:rounded-br-[15rem]' alt='img' src={About?.photo} />
        </div>
        <div className=' lg:w-[50%] lg:mt-20 text-center lg:text-start'>
            <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>{About?.title}</h2>
            {/* <p className='text-gray-500 font-[500] font-Outfit '>{removeEmptyPTags(About?.details)}
                </p> */}

                <div  className='text-gray-500 font-[500] font-Outfit text-[20px]  leading-10' dangerouslySetInnerHTML={{__html: sanitizedContent}}/>

          
        </div>

    </div>
</section>
  )
}

export default About