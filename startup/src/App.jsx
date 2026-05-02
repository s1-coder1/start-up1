import './App.css'
import Navbar from './components/Navbar'
import Home from './home/Home'
import ExtraPages from './extra/ExtraPages'
import Contact from './contact/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <ExtraPages />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
