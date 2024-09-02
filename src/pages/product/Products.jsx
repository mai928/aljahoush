import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ImageGallery } from "react-image-grid-gallery";
// import { Productgallery } from '../../../data';
import { Link } from 'react-router-dom';
import { fetchApi } from '../../utils/api';
import { Gallery } from 'react-grid-gallery';
import { Productgallery  as gal} from '../../../data';

const Products = () => {


    const [Productgallery, setData] = useState(gal)
    const { t, i18n } = useTranslation()
    useEffect(() => {

        const fetchGallary = async () => {
            const res = await fetchApi('api/galleries', i18n.language)
             setData(res?.data)
        }

        fetchGallary()

    }, [i18n.language])

    const images = Productgallery.map((image) => ({
      src:image?.src,
      alt:image?.alt,
      caption:image?.caption,
        customOverlay: (
            <div className="custom-overlay__caption">
                <div className='text-2xl font-bold'>{image.caption}</div>
            </div>
        ),
    }));
  return (
    <section className='px-10 lg:px-20 py-10 bg-gray-100'>
    <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>{t("Our Product")}</p>
        <h3 className=" text-2xl lg:text-5xl  lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
            {t("Explore Awesome Gallery")}</h3>

    </div>

    <ImageGallery  imagesInfoArray={images} columnWidth={`md:${300} lg:${500} xl:${600}`} columnCount={3} gapSize={10} />
    
</section>
  )
}

export default Products