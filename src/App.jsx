import './App.css'
import './index.css'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import Service from './components/Service/Service'
import Navbar from './components/Navbar/Navbar'
import HeaderMain from './components/Header/HeaderMain'

function App() {
  return (
    <section>
      <Navbar />

      <main id='header'>
        <HeaderMain />
      </main>

      <main id='hero'>
        <Hero />
      </main>

      {/* <main id='main'> */}
        <Main />
      {/* </main> */}

      <main id='service'>
        <Service />
      </main>

      <main id='section'>
        <Section />
      </main>

      {/* <main id='faq'>
        <Faq/>
      </main> */}

      {/* <main id='wrapper'> */}
        <Wrapper />
      {/* </main> */}

      <Footer />
    </section>
  )
}

export default App
