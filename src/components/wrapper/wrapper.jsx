import React from 'react'
import './wrapper.css'
import wrapper1 from '../images/wrapper1.svg'
import { useTranslation } from 'react-i18next'


const Wrapper = () => {
  const {t} = useTranslation()
  return(
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
  )
}
export default Wrapper