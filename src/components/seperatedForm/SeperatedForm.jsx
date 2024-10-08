import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const SeperatedForm = () => {

  const { t, i18n } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const ResponseMessage = ({ message }) => {
    if (!message) return null;

    return (
      <div className="mt-6 text-center">
        <p className={`text-lg ${message === 'Message sent successfully!' ? 'text-green-900' : 'text-red-500'}`}>
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
      myHeaders.append("Accept-Language",i18n.language);
      myHeaders.append("Cookie", "laravel_session=6oM3FFaszfcS2bV3nWtBQrSNpkdvu3BvQxhRc6h0");


      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("phone", formData.phone);
      formdata.append("email", formData.email);
      formdata.append("message", formData.message);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body:formdata,
        redirect: "follow",

      };
      const response = await fetch('http://api.aljahoush.com/api/contact-submit', requestOptions);

      const result = await response.json();
      console.log(result)

      if (response.status && result.data) {
        setResponseMessage('Message sent successfully!');
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:''
        });
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('An error occurred. Please try again.',error);
    }

    setTimeout(() => {
      setResponseMessage('')
    }, 3000)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
        className="mt-5 w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm  placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
        placeholder={t("Name")}
      />
      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
        placeholder={t("Email Address")}
      />
      <input
        type='number'
        id='phone'
        name='phone'
        value={formData.phone}
        onChange={handleChange}
        required
        className="mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
        placeholder={t("Phone Number")}
      />
      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required
        className="col mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white pb-10 pl-5 pr-3 pt-2 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm "
        cols={5}
        placeholder={t("Your Message")}
      />

      <div className='flex justify-center'>
        <button
          className={`hover:bg-secondary_color hover:text-white text-xl font-bold uppercase py-3 my-5
         bg-primary_color font-Outfit  p-1 text-center m-auto  w-64  md:w-48 lg:w-[38rem] rounded-lg `} type='submit'>{t("send")}</button>
      </div>

      <div>
        <ResponseMessage message={responseMessage} />
      </div>
    </form>
  )
}

export default SeperatedForm