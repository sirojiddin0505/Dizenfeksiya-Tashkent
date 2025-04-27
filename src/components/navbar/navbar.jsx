import './navbar.css'
import logo from '../images/logo.svg'


const navbar = ()=>{
    return(
        <nav>
            <div className="container nav__container">
                <div className="nav__logo">
                    <a href="#" ><img src={logo} alt="logo bor" className="nav__img" /></a>
                </div>
                <div className="nav__center">
                    <a href="" className="nav__link">Service</a>
                    <a href="" className="nav__link">About</a>
                    <a href="" className="nav__link">Faq</a>
                    <a href="" className="nav__link">Contact</a>
                </div>
                <div className="nav__right">
                    <select name="change">
                        <option value="">Uz</option>
                        <option value="">Ru</option>
                        <option value="">En</option>
                    </select>
                    <button className="nav__btn">Kirish</button>
                    <div className="hum__menu">☰</div>
                </div>
            </div>
        </nav>
    )
}
export default navbar