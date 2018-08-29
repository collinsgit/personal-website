import React from 'react';
import {Collapse} from 'reactstrap';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='py-5 light-background' style={{display: 'flex', flexFlow: 'column'}} id='resume'>
        <h1 className='dark-text header-text mb-3'>resume</h1>
        <hr className='dark-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <h4 className='dark-text' align='center'>
            For an overview of my experience, skills, and education, take a look at my resume. If you are interested in
            learning more about me, feel free to contact me using the info at the bottom of the page!
          </h4>
        </div>
        <div className='mt-3 mx-auto' style={{display: 'flex', maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <button className='btn btn-outline-primary mx-2' onClick={this.toggle} style={{height: '40px', width: '200px'}}>
            view resume
          </button>
          <a className='btn btn-outline-primary mx-2' href='resume.pdf' download style={{height: '40px', width: '200px'}}>
            download resume
          </a>
        </div>
        <Collapse isOpen={this.state.isOpen}>
            <iframe className='mx-auto mt-4' title='my resume' src='resume.pdf#zoom=70' style={{display: 'block', height: '600px', width: '800px'}}/>
        </Collapse>
      </div>
    );
  }
}

export default Resume;