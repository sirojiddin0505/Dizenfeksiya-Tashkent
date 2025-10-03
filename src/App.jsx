import './App.css'
import './index.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HeaderMain from './components/Header/HeaderMain'
import ContactPage from './components/Wrapper/Index'
import HeroPage from './components/Hero/Index'
import MainPage from './components/Main/Index'
import ServicePage from './components/Service/Index'
import SectionPage from './components/Section/Index'
import FooterPage from './components/Footer/Index'

function App() {
  return (
    <>
      <Navbar />
      <HeaderMain />
      <HeroPage />
      <MainPage />
      <ServicePage />
      <SectionPage />

      {/* <main id='faq'>
        <Faq/>
      </main> */}

      <ContactPage />
      <FooterPage />
    </>
  )
}

export default App
