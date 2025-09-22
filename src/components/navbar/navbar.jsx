import './navbar.css'
import logo from '../images/logo.svg'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ModalPage from '../Modal';

const Navbar = ()=>{
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
                  <a href="" className="nav__link">{t("About")} </a>
                  <a href="#faq" className="nav__link">{t("Faq")}</a>
                  <a href="#wrapper" className="nav__link">{t("Contact")}</a>
              </div>
              <div className="nav__right">
                  <select name="change" onChange={handleChange} value={languages}>
                      <option value="uz">Uz</option>
                      <option value="ru">Ru</option>
                      <option value="en">En</option>
                  </select>
                  <button className="nav__btn" onClick={() => setShowModal(!showModal)}>{t("Bog'lanish")}</button>
                  <div className="hum__menu" onClick={() => setShowMenu(true)}>☰</div>
              </div>
          </div>

            <ModalPage show={showModal} onClose={() => setShowModal(false)} />

            {showMenu && (
              <div className='menubar'>
                <div className='container menubar__container'>
                    <div className="hum__close" onClick={() => setShowMenu(false)}>✖</div>
                    <div className='menubar1'>
                    <a href="#service" className='menubar__link'>Service</a>
                    <a href="" className='menubar__link'>About</a>
                    <a href="" className='menubar__link'>Faq</a>
                    <a href="#wrapper" className='menubar__link'>Contact</a>
                    <button className="nav__btn1" onClick={() => setShowModal(true)}>{t("Kirish")}</button>
                    </div>
                </div>
              </div>
            )}
        </nav>
    )
}
export default Navbar