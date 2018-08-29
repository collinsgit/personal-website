import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='py-5 dark-background' style={{display: 'flex', flexFlow: 'column'}} id='portfolio'>
        <h1 className='light-text header-text mb-3'>portfolio</h1>
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

export default Portfolio;