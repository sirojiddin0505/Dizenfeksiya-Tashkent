import './service.css'
import service1 from '../images/service1.svg'
import service2 from '../images/service2.svg'
import service3 from '../images/service3.svg'
import { useTranslation } from 'react-i18next'

const ServicePage = () => {
    const {t} = useTranslation()
  return (
    <div id='service' className='service'>
        <div className="container service__container mt-10">
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
  )
}

export default ServicePage