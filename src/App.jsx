import './App.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero />
    </section>
    <section>Parallax</section>
    <section id="About Us">About Us</section>
    <section>Parallax</section>
    <section id="Gallery">Gallery</section>
    <section id="Testtimonials">Testimonials</section>
    <section id="Blogs">Blogs</section>
    <section id="FAQ">FAQ</section>
    <section id="Contact Us">Contact Us</section>
    </div>;
};

export default App;
