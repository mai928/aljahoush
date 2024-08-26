import React from 'react'
import { services } from '../../../data'
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';


const Service = () => {
    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    return (
        <section className=' px-10 lg:px-28 py-10'>


                <div className="py-5 text-center ">
                    <div className="flex  justify-center items-center mb-3">

                        <p className="text-secondary_color   font-IntoLightTw0 text-2xl lg:text-3xl">
                            {("OUR Services")}
                        </p>
                    </div>

                    <h3 className=" text-2xl lg:text-5xl lg:leading-[3.5rem] font-bold my-5 font-Outfit">
                        {" Currently we are"} <br />{"selling organic food"}
                    </h3>
                </div>



            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {services?.map((item, index) => (
                    <div key={index} className=" mt-5">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <img className='w-56 rounded-md' alt={'img'} src={item.src} />
                                <h2 className="text-xl font-bold font-Outfit  mb-2 mt-4">{item.title}</h2>
                                <div className="text-paragraph_color text-base font-Outfit font-[500] mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} />

                                {/* ${encodeURIComponent(item.slug) */}
                                <Link to={`/services/`} className={''} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} className='svg-right bg-primary_color p-5 rounded-full hover:bg-secondary_color' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Service