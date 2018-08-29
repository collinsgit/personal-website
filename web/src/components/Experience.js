import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className='py-5 dark-background' style={{display: 'flex', flexFlow: 'column'}} id='experience'>
        <h1 className='light-text header-text mb-3'>experience</h1>
        <hr className='light-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <p className='light-text'>
            PORTFOLIO INFO
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;