import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <header className='welcome' style={{paddingTop: 'calc(6rem + 7px)', paddingBottom: '6rem'}}>
        <div style={{display: 'flex', flexFlow: 'column'}}>
          <img className='image-fluid my-2 mx-auto mb-5'
            src={require('./../images/me_typing_icon.png')}
            alt='Profile shot'
            />
          <h1 className='mx-auto light-text header-text mb-3'>collin potts</h1>
          <hr className='light-divider' />
          <h2 className='mx-auto light-text mt-3' style={{fontSize: '1.3rem', fontWeight: '300'}}>
            software engineer - student - mathematician
          </h2>
        </div>
      </header>
    );
  }
}

export default Welcome;