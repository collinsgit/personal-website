import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='py-5 light-background' style={{display: 'flex', flexFlow: 'column'}} id='contact'>
        <h1 className='dark-text header-text mb-3'>contact</h1>
        <hr className='dark-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <p className='dark-text'>
            CONTACT INFORMATION
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;