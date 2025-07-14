import './App.css'
import logo from './components/images/logo.svg'
import header1 from './components/images/header1.svg'
import hero1 from './components/images/hero1.svg'
import hero2 from './components/images/hero2.svg'
import hero3 from './components/images/hero3.svg'
import service1 from './components/images/service1.svg'
import service2 from './components/images/service2.svg'
import service3 from './components/images/service3.svg'
import wrapper1 from './components/images/wrapper1.svg'

import Section from './components/section/section'
import Faq from './components/FAQ/faq'
import Footer from './components/footer/footer'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function App() {
    const {t, i18n} = useTranslation();
    const languages = localStorage.getItem('i18nextLng')
    const handleChange = (event) =>{
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
    const [showMenu, setShowMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)

  return (
    <section>
      <main id='navbar'>
        <nav>
            <div className="container nav__container">
                <div className="nav__logo">
                    <a href="#" ><img src={logo} alt="logo bor" className="nav__img" /></a>
                </div>
                <div className="nav__center">
                    <a href="#service" className="nav__link">{t("Service")}</a>
                    <a href="" className="nav__link">{t("About")} </a>
                    <a href="" className="nav__link">{t("Faq")}</a>
                    <a href="#wrapper" className="nav__link">{t("Contact")}</a>
                </div>
                <div className="nav__right">
                    <select name="change" onChange={handleChange} value={languages}>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>
                    <button className="nav__btn" onClick={() => setShowModal(true)}>{t("Kirish")}</button>
                    <div className="hum__menu" onClick={() => setShowMenu(true)}>☰</div>
                </div>
            </div>
        </nav>
      </main>

      <main id='header'>
        <header>
            <div className="container header__container">
                <div className="header__left">
                    <h1 className="header__title">{t("Dizenfeksiya xizmati")}</h1>
                    <p className="header__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
                    <span>
                        <button className="header__btn">{t("Bog'lanish")}</button>
                    </span>
                </div>
                <div className="header__right">
                    <img src={header1} alt="" className="header__img" />
                </div>
            </div>
        </header>
      </main>

      <main id='hero'>
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
      </main>

      <main id='main'>
      <div className='main'>
        <div className="container main__container">
            <h2 className="main__title">{t("Klapa va zararli hashorot endi yo’q deb hisoblang !!!")} </h2>
            <p className="main__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
            <button className="main__btn">{t("Bog'lanish")} </button>
        </div>
      </div>
      </main>

      <main id='service'>
      <div className='service'>
        <div className="container service__container">
            <h2 className="service__title">{t("Service")}</h2>
            <p className="service__texts">{t("Bu darsliklari sizning yuqori daraja olishingizga yordam beradi")}</p>
            <ul className="service__list">
                <li className="service__item">
                    <h3 className="item__title">{t("Boshlang'ich tushunchalar")}</h3>
                    <p className="service__text">{t("Nazariy bilimlar")}</p>
                    <p className="item__text">{t("16 dars")}</p>
                    <img src={service1} alt="" className="service__img" />
                </li>
                <li className="service__item">
                    <h3 className="item__title title">{t("O'rta")}</h3>
                    <p className="service__text">{t("Nazariy va Amaliy bilimlar")}</p>
                    <p className="item__text">{t("16 dars")}</p>
                    <img src={service2} alt="" className="service__img" />
                </li>
                <li className="service__item">
                    <h3 className="item__title title">{t("Yuqori")}</h3>
                    <p className="service__text">{t("Amaliy bilimlar")}</p>
                    <p className="item__text">{t("16 dars")}</p>
                    <img src={service3} alt="" className="service__img" />
                </li>
            </ul>
        </div>
      </div>
      </main>

      <Section/>
      <Faq/>

      <main id='wrapper'>
      <div className='wrapper'>
        <div className="container wrapper__container">
            <div className="wrapper__left">
                <h2 className="wrapper__title">{t("Ma'lumotingizni qoldiring")}</h2>
                  <form action="#" id="form" >
                  <input type="text" placeholder='ism' className='inp' required/>
                  <input type="tel" placeholder='+998 |'className='inp' required/>
                <span>
                    <label className='label'>
                      <input type="checkbox" />{t("Maxfiylik Siyosati")}
                    </label>
                </span>
                <button className="wrapper__btn" type='submit'>{t("Yozilish")}</button>
                  </form>
            </div>
            <div className="wrapper__right">
                <h2 className="wrapper__titles">{t("Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina")} </h2>
                <img src={wrapper1} alt="" className="wrapper__img" />
            </div>
        </div>
      </div>
      </main>

      <Footer/>
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
      
      {showModal && (
        <div className='modal'>
          <div className='container modal__container'>
            <div className='modal__div1'>
              <h2 className='modal__title'>Kirish</h2>
              <button className='close__modal' onClick={()=> setShowModal(false)}>X</button>
            </div>
            <form>
              <div className='modal__div2'>
                <label className='modal__label'>Ismingiz</label>
                <input type="text" placeholder='Enter name' className='modal__inp'/>
                <label className='modal__label'>Raqamingiz</label>
                <input type="tel" placeholder='Enter phone number' className='modal__inp'/>
                <label className='modal__label'>Shahringiz</label>
                <input type="text" placeholder='Enter city' className='modal__inp'/>
                <button type='submit' className='modal__button'>Yuborish</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
export default App
