import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Welcome />
      </div>
    );
  }
}

export default App;
