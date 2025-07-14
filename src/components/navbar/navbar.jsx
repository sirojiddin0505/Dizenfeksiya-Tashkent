// import './navbar.css'
// import logo from '../images/logo.svg'
// import { useTranslation } from 'react-i18next';

// const navbar = ()=>{
//     const {t, i18n} = useTranslation();
//     const languages = localStorage.getItem('i18nextLng')
//     const handleChange = (event) =>{
//         const selectedLanguage = event.target.value;
//         i18n.changeLanguage(selectedLanguage);
//     }

//     return(
//         <nav>
//             <div className="container nav__container">
//                 <div className="nav__logo">
//                     <a href="#" ><img src={logo} alt="logo bor" className="nav__img" /></a>
//                 </div>
//                 <div className="nav__center">
//                     <a href="" className="nav__link">{t("Service")}</a>
//                     <a href="" className="nav__link">{t("About")} </a>
//                     <a href="" className="nav__link">{t("Faq")}</a>
//                     <a href="" className="nav__link">{t("Contact")}</a>
//                 </div>
//                 <div className="nav__right">
//                     <select name="change" onChange={handleChange} value={languages}>
//                         <option value="uz">Uz</option>
//                         <option value="ru">Ru</option>
//                         <option value="en">En</option>
//                     </select>
//                     <button className="nav__btn">{t("Kirish")}</button>
//                     <div className="hum__menu">☰</div>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default navbar