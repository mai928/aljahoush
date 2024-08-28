import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../../utils/api'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'

const ServiceDetails = () => {

    const{t ,i18n}=useTranslation()
  const {slug} =  useParams()
  console.log({slug})





  const [services, setData] = useState('')

  useEffect(() => {
      const fetchDataSlider = async () => {
          const res = await fetchApi(`api/single-service/${slug}`, i18n.language)
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
    <section className='px-10 lg:px-16 py-20'>
    <div className=' block lg:flex gap-24 '>
        <div className='lg:w-[50%]'>
            <img className=' w-full' alt='img' src={services?.photo} />
        </div>
        <div className=' lg:w-[50%]  text-center lg:text-start'>
            <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>{services?.title}</h2>
            {/* <p className='text-gray-500 font-[500] font-Outfit '>{removeEmptyPTags(About?.details)}
                </p> */}

                <div  className='text-gray-500 font-[500] font-Outfit text-[20px]  leading-10' dangerouslySetInnerHTML={{__html: sanitizedContent}}/>

          
        </div>

    </div>
</section>
  )
}

export default ServiceDetails