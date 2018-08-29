import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div className='py-5 light-background' style={{display: 'flex', flexFlow: 'column'}} id='resume'>
        <h1 className='dark-text header-text mb-3'>resume</h1>
        <hr className='dark-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <p className='dark-text'>
            RESUME DOWNLOAD
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;