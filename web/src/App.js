import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

// SECTIONS LIST

const sections = ['about me', 'portfolio', 'resume', 'experience', 'contact'];

// COMPONENT

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar sections={sections} />
        <Welcome />
        <About />
        <Portfolio />
        <Resume />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
