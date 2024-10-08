import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo22.png'
import { navlinks } from '../../../data'
import { Link } from 'react-router-dom'
import footer2 from '../../assets/footer2.png'
import { useTranslation } from 'react-i18next'
import { fetchApi, fetchPostApi } from '../../utils/api'

const Footer = () => {
    const [socialData, setData] = useState('')
    const [settingsData, setSettings] = useState('')


    const { t, i18n } = useTranslation()

    const [formData, setFormData] = useState({
        email: '',

    });
    const [responseMessage, setResponseMessage] = useState('');

    const ResponseMessage = ({ message }) => {
        if (!message) return null;

        return (
            <div className="mt-6 text-center">
                <p className={`text-lg ${message === 'Message sent successfully!' ? 'text-white text-2xl' : 'text-red-500'}`}>
                    {message}
                </p>
            </div>
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {


            const myHeaders = new Headers();
            myHeaders.append("Accept-Language", i18n.language);
            // myHeaders.append("Cookie", "laravel_session=6oM3FFaszfcS2bV3nWtBQrSNpkdvu3BvQxhRc6h0");


            const formdata = new FormData();
            formdata.append("email", formData.email);


            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
            };
            const response = await fetch('https://api.aljahoush.com/api/submit-subscriptions', requestOptions);

            const result = await response.json();
            console.log(result)

            if (response.status && result.data) {
                setResponseMessage('Message sent successfully!');
                setFormData({
                    email: '',
                });
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred. Please try again.', error);
        }

        setTimeout(() => {
            setResponseMessage('')
        }, 3000)
    };



    useEffect(() => {

        const setting = async () => {
            const res = await fetchApi('api/settings', i18n.language)
            const settingData = res?.data
            console.log(settingData)
            setSettings(settingData)
        }

        setting()


    }, [i18n.language])


    useEffect(() => {



        const socialMedia = async () => {
            const res = await fetchPostApi('api/social-media', i18n.language)
            const social = res?.data
            console.log(social)
            setData(social)
        }

        socialMedia()
    }, [i18n.language])




    return (
        <section className='bg-dark_Green z-20   background-img pt-10 lg:pt-20 pb-40 px-10  lg:px-24'>
            <div className='block text-center lg:text-start lg:flex lg:mt-20 relative z-30'>


                <div className='lg:w-1/3 '>
                    <img alt='footer-logo' className=' w-52  m-auto lg:m-0 filter brightness-0 invert-[1]' src={settingsData?.logo} />
                    <p className='text-white font-Outfit my-4 l:my-10'>{settingsData?.footer}</p>


                    <form onSubmit={handleSubmit} className='relative flex items-center'>
                        <input type='email'
                            id='email'
                            name='email'
                            value={formData.email} onChange={handleChange} className='py-5 px-5 lg:px-10 w-full rounded-full  block' placeholder={t('Your Email')} />
                        <button type='submit' className='bg-primary_color  rounded-full px-4 py-3 font-bold font-Outfit absolute end-2  hover:bg-secondary_color hover:text-white'>{t("Go")}</button>

                    </form>
                    <div className='my-2'>
                        <ResponseMessage message={responseMessage} />
                    </div>
                    {/* social media */}
                    <div className='flex flex-wrap gap-10 mt-10  z-50 '>
                        {/* whasup */}
                        {/* <Link to={socialData?.facebook} className=' flex items-center  px-3  bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} fill='white' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                        </Link> */}

                        {/* youtub */}
                        <Link target='_blank' to={`${socialData?.youtube}`} className=' flex items-center  px-3 py-3 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={26} fill='white' viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                        </Link>
                        {/* instagram */}
                        {/* <Link className=' flex items-center  px-3 py-2 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                            <svg xmlns="http://www.w3.org/2000/svg" width={23} fill='white' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </Link> */}
                        {/*  linked in */}
                        <Link target='_blank' to={`${socialData?.linkedin}`} className=' flex items-center  px-4 py-3 lg:py-2 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                            <svg xmlns="http://www.w3.org/2000/svg" width={18} fill='white' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </Link>
                        {/* facebook */}
                        <Link target='_blank' to={`${socialData?.facebook}`} className=' flex items-center  px-5 py-4 lg:py-1 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                            <svg xmlns="http://www.w3.org/2000/svg" width={11} fill='white' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        </Link>
                    </div>


                </div>
                <div className='hidden lg:block '>
                    <div className=' border-s-[1px] border-white h-[300px] mx-14 opacity-[.3] ' />

                </div>



                <div className='lg:w-[25%] mt-10 lg:mt-0'>
                    <h3 className='font-Outfit text-3xl text-white mb-6'>{t("Explore")}</h3>
                    <ul>
                        {
                            navlinks.map((link) => (
                                <li className='text-slate-200 font-Outfit my-4 text-[17px] font-semibold'>
                                    <Link to={link.path}>{t(link.name)}</Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className='mt-10 lg:mt-0 '>
                    <h3 className='font-Outfit text-3xl text-white mb-2 lg:mb-6'>{t("Contact Info")}</h3>
                    <div className=''>
                        {/* address */}
                        <div className='flex items-center justify-center lg:justify-start gap-3 py-3'>
                            <Link className=' flex items-center   px-3 py-3 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                                <svg xmlns="http://www.w3.org/2000/svg" width={20} fill='white' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                            </Link>
                            <div className='block w-[400px]'>
                                {
                                    settingsData.addresses?.map((item) => (
                                        <p className='text-white font-Outfit py-1'>{t(item)}</p>

                                    ))
                                }
                            </div>
                        </div>

                        {/* email */}
                        <div className='flex items-center justify-center lg:justify-start gap-3 py-3'>
                            <Link className=' flex items-center  px-3 py-3 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' width={20} viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>                            </Link>
                                <div className='block w-[400px]'>
                                {
                                settingsData.emails?.map((item) => (
                                    <Link to={`mailto:${item}`} className='block text-white font-Outfit my-2'>{t(item)}</Link>

                                ))
                            }
                            </div>
                        </div>


                        {/* phone */}

                        <div className='flex items-center justify-center lg:justify-start gap-3 py-3'>
                            <Link className=' flex items-center  px-3 py-3 bg-opacity-5 bg-white  border-dashed border-slate-400 border-[1px] rounded-full'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' width={20} viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                            </Link>

                                <div className='block w-[400px]'>

                                {
                                    settingsData.phones?.map((item) => (
                                        <Link to={`tel:${item}`} className='block text-white font-Outfit py-1'>{t(item)}</Link>

                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className=' absolute bottom-0 end-0 z-0'>
                <img className='w-[600px] opacity-50 ' alt='img' src={footer2} />
            </div>
        </section>
    )
}

export default Footer