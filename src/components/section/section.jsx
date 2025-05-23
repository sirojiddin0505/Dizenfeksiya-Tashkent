import './section.css'
import section1 from '../images/section.svg'
import section2 from '../images/section2.svg'
import { useTranslation } from 'react-i18next'


const section = () => {
  const {t, i18n} = useTranslation()
  return (
    <section>
        <div className="container section__container">
            <div className="section__left">
                <img src={section1} alt="" className="section__img" />
            </div>
            <div className="section__right">
                <img src={section2} alt="" className="section__pic" />
                <h2 className="section__title">{t("Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina")}</h2>
                <button className="section__btn">{t("Bog'lanish")}</button>
            </div>
        </div>
    </section>
  )
}

export default section