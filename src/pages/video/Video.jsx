import React from 'react'
import { videoSources } from '../../../data'

const VideoPlayer = ({ src, type, controls = true, autoplay = false, loop = false, muted = false, width = '100%', height = 'auto' }) => {
    return (
        <video
            controls={controls}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            width={width}
            height={height}
        className='mt-5'
        >
            <source src={src} type={type} />
            Your browser does not support the video tag.
        </video>
    );
};
const Video = () => {
  return (
    <section className='px-10 py-20'>
    <div className='text-center mb-10'><p className='text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl'>Our Videos </p>
        <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit ">
            Explore Awesome Videos</h3>

    </div> 
               <div className='block lg:flex flex-wrap justify-center gap-6' >
        {
            videoSources.map((vid, index) => (
                <VideoPlayer
                    key={index}
                    src={vid.src}
                    type={vid.type}
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                    width="450px"
                    height="500px"
                />
            ))
        }
    </div>
</section>
  )
}

export default Video