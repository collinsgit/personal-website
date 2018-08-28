import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='m-5 p-5'>
        <h1 className='dark-text header-text'>ABOUT ME</h1>
        <hr className='dark-divider' />
        <p>
          I am an undergraduate student at MIT, where I am majoring in Computer Science and
          Mathematics. Academically, my interests include Machine Learning, Algorithms, and Data Analysis. Outside of
          class, I love to spend my time learning French, playing piano, reading novels, and spending time with
          friends.
        </p>
        <p>
          I am excited to gain more experience in fields including Software Engineering, Analytics,
          and Finance throughout my university career. I have been fortunate to participate in fantastic classes and
          research groups at MIT, which have greatly influenced my passion for technology and mathematics.
        </p>
      </div>
    );
  }
}

export default About;