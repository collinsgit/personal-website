import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='py-5 dark-background' style={{display: 'flex', flexFlow: 'column'}} id='portfolio'>
        <h1 className='light-text header-text mb-3'>portfolio</h1>
        <hr className='light-divider' />
      </div>
    );
  }
}

export default Portfolio;