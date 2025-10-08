import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
// import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
