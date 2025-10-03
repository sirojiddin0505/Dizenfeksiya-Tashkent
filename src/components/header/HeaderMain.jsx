import './header.css'
import header1 from '../images/header1.svg'
import { useTranslation } from 'react-i18next';
import ModalPage from '../Modal';
import { useState } from 'react';

const HeaderMain = ()=>{
    const [showModal, setShowModal] = useState(false);
    const {t} = useTranslation();
    return(
        <header>
            <div className="container header__container">
                <div className="header__left">
                    <h1 className="header__title">{t("Dizenfeksiya xizmati")}</h1>
                    <p className="header__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
                    <span>
                        <button onClick={() => setShowModal(true)} className="header__btn">{t("Bog'lanish")}</button>
                    </span>
                </div>
                <div className="header__right">
                    <img src={header1} alt="" className="header__img" />
                </div>
            </div>
            <ModalPage show={showModal} onClose={() => setShowModal(false)} />
        </header>
    )
}
export default HeaderMain