import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
     <Hero />
     <About />
     <Projects />
     <Footer />
    </div>
  )
}

export default Home