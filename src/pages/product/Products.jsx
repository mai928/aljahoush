import React from 'react'
import { ImageGallery } from "react-image-grid-gallery";
import { Productgallery } from '../../../data';
import { Link } from 'react-router-dom';

const images = Productgallery.map((image) => ({
    ...image,
    customOverlay: (
        <div className="custom-overlay__caption">
            <div className='text-2xl font-bold'>{image.caption}</div>
        </div>
    ),
}));
const Products = () => {
  return (
    <section className='px-10 lg:px-20 py-10'>
    <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>Our Product </p>
        <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
            Explore Awesome Gallery</h3>

    </div>

    <ImageGallery imagesInfoArray={images} columnWidth={240} gapSize={10} />
    
</section>
  )
}

export default Products