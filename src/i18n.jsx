import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/locales/uz.json'
import ruTranslation from '../public/locales/ru.json'
import enTranslation from '../public/locales/en.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18n
.use(Backend)

.use(languageDetector) //tilni o'zgartirish

.use(initReactI18next) //bog'lash i18n va reactni
.init({
    fallbackLng: 'uz',
    lng : language,
    debug : true,
    resources :{
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation}
    }
})
export default i18n
