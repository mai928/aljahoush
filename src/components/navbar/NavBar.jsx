import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navlinks } from '../../../data'
import logo from '../../assets/logo1.png'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [showmenuIcon, setshowmenuIcon] = useState(false)

    useEffect(() => {

        const handleSize = () => {
            if (window.innerWidth <= 1024) {
                setToggle(false)
                setshowmenuIcon(true)
            } else {
                setshowmenuIcon(false)

            }
        }


        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize)
        }

    }, [])

    return (
        <header className='relative z-50 '>
            <nav className='nav  bg-white py-2'>
                <div className='flex flex-1 justify-between items-center mx-5 lg:mx-32'>
                    <img src={logo} width={150} />


                    {


                        showmenuIcon === true ?
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} width={30} height={30} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

                            </div>

                            :


                            <>

                                <ul className='flex'> {
                                    navlinks.map((navlink, index) => (
                                        <li className='ms-10  ' key={index} >
                                            <Link to={navlink.path} className='text-color_heading hover:text-secondary_color cursor-pointer font-[700] text-[18px] font-Outfit '>{navlink.name}</Link>
                                        </li>
                                    ))
                                }
                                </ul>

                                <Link to={'/'} className='px-11 py-3 cursor-pointer  rounded-full border-primary_color border-solid border-2    text-color_heading font-[700] text-[18px] font-Outfit'>english</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill='#1f4e3d' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>


                            </>

                    }


                </div>
            </nav>

            {/* slideBar */}

            <div>
                <div className={`sidebar ${toggle ? "open" : ""}`}>
                    <div className="p-10">
                        <div className="flex justify-between items-end mb-10">
                            <Link href={'/'}><img alt="logo"  width={110} height={'auto'} src={logo} /></Link>
                            <h1
                                className="cursor-pointer p-1 px-3 rounded-full bg-primary_color font-semibold text-white-300"
                                onClick={() => setToggle(false)}
                            >
                                x
                            </h1>
                        </div>

                        <ul>
                            {navlinks.map((item) => (
                                <div key={item.name} className="flex items-center mt-7">
                                    <div className="p-1 bg-white-400 rounded-full me-4">
                                        <svg

                                            xmlns="http://www.w3.org/2000/svg"
                                            width={13}
                                            height={13}
                                            className="fill-primary_color  "
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                        </svg>
                                    </div>
                                    <li>

                                        <Link

                                            className="text-secondary-500 text-xl font-semibold   hover:text-primary-500"
                                            to={item.path}
                                            onClick={() => setToggle(false)}
                                        >
                                            {(item.name)}
                                        </Link>
                                    </li>
                                </div>

                            ))}
                        </ul>

                        {/* <div className="flex items-center mt-7">
                            <div className="p-1 bg-white-400 rounded-full me-4">
                                <svg

                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height={13}
                                    className="fill-primary_color  "
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>


                            </div>
                            <div className="border-[1px] border-gray-400 rounded-lg p-2">
                                <LanguageChanger />

                            </div>


                        </div> */}
                    </div>
                </div>
            </div>


        </header>

    )
}

export default NavBar