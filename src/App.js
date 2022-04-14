import './App.css';
import './style/main.css'
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
          <header>
            <Hero />
          </header>

          <main>
              <section id="about">
                  <About />
              </section>

              <section id="project">
                  <Projects />
                  <Contact />
              </section>
          </main>
    </div>
  );
}

export default App;
