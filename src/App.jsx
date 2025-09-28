import './App.css'
import './index.css'
import Section from './components/section/section'
import Faq from './components/FAQ/faq'
import Footer from './components/footer/footer'
import Wrapper from './components/wrapper/wrapper'
import Service from './components/service/service'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Main from './components/main/Main'

function App() {
  return (
    <section>
        <Navbar/>

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
        <Section/>
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
