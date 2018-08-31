import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='py-5 light-background' style={{display: 'flex', flexFlow: 'column'}} id='about_me'>
        <h1 className='dark-text header-text mb-3'>about me</h1>
        <hr className='dark-divider' />
        <div className='mt-3 mx-auto' style={{maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <h5 align='center' className='dark-text'>
            I am an undergraduate student at MIT, where I am majoring in Computer Science and
            Mathematics. Academically, my interests include Machine Learning, Algorithms, and Data Analysis. Outside of
            class, I love to spend my time learning French, playing piano, reading novels, and spending time with
            friends.
          </h5>
          <h5 align='center' className='dark-text'>
            I am excited to gain more experience in fields including Software Engineering, Analytics,
            and Finance throughout my university career. I have been fortunate to participate in fantastic classes and
            research groups at MIT, which have greatly influenced my passion for technology and mathematics.
          </h5>
        </div>
      </div>
    );
  }
}

export default About;