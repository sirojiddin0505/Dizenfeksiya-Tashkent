import './App.css'
import './index.css'
import Footer from './components/footer/Footer'
import Wrapper from './components/wrapper/Wrapper'
import Service from './components/service/Service'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Section from './components/section/Section'

function App() {
  return (
    <section>
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
        <Service/>
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
    </section>
  )
}
export default App
