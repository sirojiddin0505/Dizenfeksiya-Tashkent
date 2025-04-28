import React from 'react'
import './section.css'
import section1 from '../images/section.svg'
import section2 from '../images/section2.svg'

const section = () => {
  return (
    <section>
        <div className="container section__container">
            <div className="section__left">
                <img src={section1} alt="" className="section__img" />
            </div>
            <div className="section__right">
                <img src={section2} alt="" className="section__pic" />
                <h2 className="section__title">Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h2>
                <button className="section__btn">Bog'lanish</button>
            </div>
        </div>
    </section>
  )
}

export default section