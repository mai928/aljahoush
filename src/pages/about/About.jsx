import React from 'react'
import logo from '../../assets/logo.jpeg'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
const About = () => {
  return (
    <section className='px-10 lg:px-16 py-20'>
    <div className=' block lg:flex gap-24 '>
        <div>
            <img className='rounded-lg lg:rounded-tl-[15rem] lg:rounded-br-[15rem]' alt='img' src={logo} />
        </div>
        <div className='lg:mt-20 text-center lg:text-start'>
            <h2 className='text-color_heading text-xl lg:text-5xl lg:leading-[3.5rem]  font-bold font-Outfit my-10'>Agriculture & Organic
                Product Farm</h2>
            <p className='text-gray-500 font-[500] font-Outfit '>
                There are many variations of passages of ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even. Comparison new ham melancholy.</p>

          
        </div>

    </div>
</section>
  )
}

export default About