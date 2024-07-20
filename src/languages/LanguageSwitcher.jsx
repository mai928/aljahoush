import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        const lng = e.target.value
        i18n.changeLanguage(lng);
    };

    const language = [
        {
            code: 'en', label: 'English'
        }, {
            code: 'ar', label: 'العربية'
        },

    ]
    return (
        <div>
            <select className='outline-none' onChange={changeLanguage} value={i18n.language} >
                {
                    language.map((item) => (
                        <option key={item.code} value={item.code} >{item.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default LanguageSwitcher