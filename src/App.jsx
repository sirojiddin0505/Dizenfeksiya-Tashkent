import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Wrapper from './components/wrapper/Wrapper'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'
import Service from './components/service/Service'
import './index.css'

function App() {
  return (
    <>
        <Navbar />

      <main id='header'>
        <Header />
      </main>

      <main id='hero'>
        <Hero />
      </main>

      <main id='main'>
        <Main />
      </main>

      <main id='service'>
        <Service />
      </main>

      <main id='section'>
        <Section />
      </main>
      
      {/* <main id='faq'>
        <Faq/>
      </main> */}

      <main id='wrapper'>
        <Wrapper />
      </main>

      <Footer />      
    </>
  )
}
export default App
