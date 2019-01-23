import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CustomModal from './components/Modal';

// SECTIONS LIST

const sections = ['about me', 'portfolio', 'resume', 'experience', 'contact'];

// COMPONENT

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalContent: {'header': null, 'body': null}
    };

    this.modalToggle = this.modalToggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  modalToggle(content) {
    this.setState({
      modal: !this.state.modal,
      modalContent: content
    });

    console.log(this.state.modalContent)
  }

  closeModal() {
    this.setState({
      modal: false,
      modalContent: {'header': null, 'body': null}
    });
  }

  render() {
    return (
      <div>
        <NavBar sections={sections} />
        <Welcome />
        <About />
        <Portfolio onClick={(content) => this.modalToggle(content)} />
        <Resume />
        <Experience onClick={(content) => this.modalToggle(content)} />
        <Contact />

        <CustomModal isOpen={this.state.modal}
                     content={this.state.modalContent}
                     close={this.closeModal} />
      </div>
    )
  }
}

export default App;
