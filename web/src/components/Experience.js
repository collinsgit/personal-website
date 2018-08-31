import React from 'react';
import ModalButton from './ModalButton';

class Experience extends React.Component {
  render() {
    return (
      <div className='py-5 dark-background' style={{display: 'flex', flexFlow: 'column'}} id='experience'>
        <h1 className='light-text header-text mb-3'>experience</h1>
        <hr className='light-divider' />
        <div className='mt-3 mx-auto' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <ModalButton background='portfolio/wiki.png' text='WikipediaBase Project with MIT&#39;s Infolab' />
          <ModalButton background='portfolio/jpmc.png' text='Technology Analyst Internship at JPMorgan Chase & Co.' />
          <ModalButton background='portfolio/amp.png' text='Speech Recognition Project with MIT&#39;s Research Laboratory of Electronics' />
          <ModalButton background='portfolio/telescope.png' text='Zero Robotics Project with MIT&#39;s Space System Laboratory' />
        </div>
      </div>
    );
  }
}

export default Experience;