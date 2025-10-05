import './navbar.css'
import logo from '../images/logo.svg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ModalPage from '../Modal';

const NavbarPage = ()=>{
    const {t, i18n} = useTranslation();
    const languages = localStorage.getItem('i18nextLng')
    const handleChange = (event) =>{
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
    const [showModal, setShowModal] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav>
          <div className="container nav__container shadow-md">
              <div className="nav__logo">
                  <a href="#" ><img src={logo} alt="logo bor" className="nav__img" /></a>
              </div>
              <div className="nav__center">
                  <a href="#service" className="nav__link">{t("Service")}</a>
                  <a href="#header" className="nav__link">{t("About")} </a>
                  <a href="#hero" className="nav__link">{t("Afzalliklarimiz")}</a>
                  <a href="#wrapper" className="nav__link">{t("Contact")}</a>
              </div>
              <div className="nav__right">
                  <select name="change" onChange={handleChange} value={languages}>
                      <option value="uz">Uz</option>
                      <option value="ru">Ru</option>
                      <option value="en">En</option>
                  </select>
                  <button className="nav__btn" onClick={() => setShowModal(!showModal)}>{t("Bog'lanish")}</button>
                  <div className="hum__menu cursor-pointer rounded-full w-10 h-10 text-center hover:bg-gray-100 duration-400" onClick={() => setShowMenu(true)}>☰</div>
              </div>
          </div>

            <ModalPage show={showModal} onClose={() => setShowModal(false)} />

            {showMenu && (
              <div className='menubar fixed inset-0 bg-black/20 ' onClick={() => setShowMenu(false)}>
                <div className={`menubar2  bg-white w-[250px] h-screen transform transition-transform duration-500
                    ${showMenu ? "translate-x-0" : "translate-x-full"} `}>
                    <div className="hum__close font-bold " onClick={() => setShowMenu(false)}>✖</div>
                    <div className='menubar1'>
                        <a href="#service" className='menubar__link'>Xizmat</a>
                        <a href="" className='menubar__link'>Haqida</a>
                        <a href="" className='menubar__link'>Afzalliklarimiz</a>
                        <a href="#wrapper" className='menubar__link'>{t('Aloqa')}</a>
                        <button 
                            className="border rounded-md bg-blue-500 w-full text-white hover:bg-blue-400 nav_btn1 " 
                            onClick={() => setShowModal(true)}>
                            {t("Bog'lanish")}
                        </button>
                    </div>
                </div>
              </div>
            )}
        </nav>
    )
}
export default NavbarPage