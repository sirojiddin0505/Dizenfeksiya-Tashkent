import './main.css'
import { useTranslation } from 'react-i18next'

const main = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className='main'>
        <div className="container main__container">
            <h2 className="main__title">{t("Klapa va zararli hashorot endi yo’q deb hisoblang !!!")} </h2>
            <p className="main__text">{t("Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun")}</p>
            <button className="main__btn">{t("Bog'lanish")} </button>
        </div>
    </div>
  )
}

export default main