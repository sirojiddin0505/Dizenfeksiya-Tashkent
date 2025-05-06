import React from 'react'
import './hero.css'
import hero1 from '../images/hero1.svg'
import hero2 from '../images/hero2.svg'
import hero3 from '../images/hero3.svg'
import { useTranslation } from 'react-i18next'


const hero = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className='hero'>
        <div className="container hero__container">
            <h1 className="hero__title">{t("Afzalliklarimiz")}</h1>
            <div className="boxs">
            <div className="hero__box">
                <img src={hero1} alt="" className="hero__img" />
                <h2 className="hero__subtitle">{t("Tezda xizmat ko’rsatish")}</h2>
                <p className="hero__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
            </div>
            <div className="hero__box">
                <img src={hero2} alt="" className="hero__img" />
                <h2 className="hero__subtitle">{t("Yetuk mutahasislaimiz")}</h2>
                <p className="hero__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
            </div>
            <div className="hero__box">
                <img src={hero3} alt="" className="hero__img" />
                <h2 className="hero__subtitle">{t("Sizga maqul vaqtda")}</h2>
                <p className="hero__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default hero