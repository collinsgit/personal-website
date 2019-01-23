import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='py-5 light-background' style={{display: 'flex', flexFlow: 'column'}} id='contact'>
        <h1 className='dark-text header-text mb-3'>contact</h1>
        <hr className='dark-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <h5 align='center' className='dark-text'>
            If you're interested in learning more about me, my projects, or my interests, contact me. I prefer to
            communicate over email, but feel free to call or message me on Facebook or LinkedIn!
          </h5>
          <table align='center' cellPadding='8px'>
            <tbody>
              <tr>
                <td>
                  <h5 className='dark-text'>email:</h5>
                </td>
                <td>
                  <a href='mailto:cpotts@mit.edu'>
                    <h5 style={{color: '#52658f'}}>cpotts@mit.edu</h5>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className='dark-text'>cell:</h5>
                </td>
                <td>
                  <a>
                    <h5 style={{color: '#52658f'}}>(308) 765-1035</h5>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className='dark-text'>github:</h5>
                </td>
                <td>
                  <a href='https://github.com/collinsgit' target='_blank' rel='noopener noreferrer'>
                    <h5 style={{color: '#52658f'}}>collinsgit</h5>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;