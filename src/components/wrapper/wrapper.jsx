import React from 'react'
import './wrapper.css'
import wrapper1 from '../images/wrapper1.svg'

const wrapper = () => {
  return(
    <div className='wrapper'>
        <div className="container wrapper__container">
            <div className="wrapper__left">
                <h2 className="wrapper__title">Ma'lumotingizni qoldiring</h2>
                  <form action="#" id="form" >
                  <input type="text" placeholder='ism' className='inp' required/>
                <input type="tel" placeholder='+998 |'className='inp' required/>
                <span>
                    <input type="checkbox" required/>
                    <p className="span__text">Maxfiylik Siyosati</p>
                </span>
                <button className="wrapper__btn" type='submit'>Yozilish</button>
                  </form>
            </div>
            <div className="wrapper__right">
                <h2 className="wrapper__titles">Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h2>
                <img src={wrapper1} alt="" className="wrapper__img" />
            </div>
        </div>
    </div>
  )
}
import './wrapper.css'

export default wrapper