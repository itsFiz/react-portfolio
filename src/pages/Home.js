import About from "../components/About";
import Hero from "../components/Hero";
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
     <Hero />
     <About />
    </div>
  )
}

export default Home