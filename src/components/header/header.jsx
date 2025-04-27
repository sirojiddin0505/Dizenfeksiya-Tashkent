import './header.css'
import header1 from '../images/header1.svg'

const header = ()=>{
    return(
        <header>
            <div className="container header__container">
                <div className="header__left">
                    <h1 className="header__title">Dizenfeksiya xizmati </h1>
                    <p className="header__text">Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    <span>
                        <button className="header__btn">Bog'lanish</button>
                    </span>
                </div>
                <div className="header__right">
                    <img src={header1} alt="" className="header__img" />
                </div>
            </div>
        </header>
    )
}
export default header