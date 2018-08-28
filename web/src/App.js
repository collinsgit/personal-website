import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Welcome />
        <About />
      </div>
    );
  }
}

export default App;
