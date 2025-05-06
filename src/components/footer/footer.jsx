import React from 'react'
import './footer.css'
import logo from '../images/logo.svg'
import { useTranslation } from 'react-i18next'


const footer = () => {
  const {t, i18n} = useTranslation();
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__left">
          <img src={logo} alt="" className="footer__img" />
        </div>
        <div className="footer__right">
        <span>
            <p className="footer__text">{t("Toshkent shahri  Yashnabod tumani  Mo’ljal Sergeli-4 bekat")}</p>
          </span>
          <span>
            <p className="footer__text"><a target='_blank' href="tel:+998 94 099 3434" className="footer__link">+998 94 099 3434</a></p>
          </span>
          <hr />
          <button className="footer__btn">{t("Facebook")}</button>
          <button className="footer__btn">{t("Instagram")}</button>
          <button className="footer__btn">{t("Telegram")}</button>
        </div>
      </div>
    </footer>
  )
}

export default footer