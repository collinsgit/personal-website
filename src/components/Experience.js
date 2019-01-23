import React from 'react';
import ModalButton from './ModalButton';

class Experience extends React.Component {
  render() {
    return (
      <div className='py-5 dark-background' style={{display: 'flex', flexFlow: 'column'}} id='experience'>
        <h1 className='light-text header-text mb-3'>experience</h1>
        <hr className='light-divider' />
        <div className='mt-3 mx-auto'
             style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '720px', paddingLeft: '15px', paddingRight: '15px'}}>
          <ModalButton background='portfolio/wiki.png'
                       text='WikipediaBase Project with MIT&#39;s Infolab'
                       onClick={this.props.onClick}
                       content={wikiContent}/>
          <ModalButton background='portfolio/jpmc.png'
                       text='Technology Analyst Internship at JPMorgan Chase & Co.'
                       onClick={this.props.onClick}
                       content={jpmcContent} />
          <ModalButton background='portfolio/amp.png'
                       text='Speech Recognition Project with MIT&#39;s Research Laboratory of Electronics'
                       onClick={this.props.onClick}
                       content={speechContent} />
          <ModalButton background='portfolio/telescope.png'
                       text='Zero Robotics Project with MIT&#39;s Space System Laboratory'
                       onClick={this.props.onClick}
                       content={zeroContent} />
        </div>
      </div>
    );
  }
}

const wikiContent = {
  header: 'WikipediaBase @ MIT\'s Infolab',
  body: (
    <div>
      <p>
        <a href='https://github.com/infolab-csail/WikipediaBase' target='_blank' rel='noopener noreferrer'>WikipediaBase</a> is
        a knowledgebase, which utilizes the data of Wikipedia in order to create a organized database
        for informational queries. One of WikipediaBase's main uses is as a data source
        for <a href='http://start.csail.mit.edu/index.php' target='_blank' rel='noopener noreferrer'>START</a>,
        a groundbreaking question-answering system developed by MIT's Infolab.
      </p>
      <p>
        The majority of my work involves increasing the scope and functionality of WikipediaBase.
        Some of my past projects have included allowing queries of past versions of Wikipedia articles,
        adding functionality for city and location articles, and automating the backend updating process of WikipediaBase.
      </p>
      <p>
        More recently, I have been working on methods of taking data from our knowledgebase and transforming it into
        natural language. In theory, this would allow one to transfer information between databases, using English and
        a question-answering system parser to create a global transfer format. While this specifically applies to our
        work in the Infolab, we hope that our work will be applied by others.
      </p>
    </div>
  )
};

const jpmcContent = {
  header: 'Internship at JPMorgan Chase',
  body: (
    <div>
      <p>
        Over the summer of 2018, I had the opportunity to work at JPMorgan Chase, focusing on creating programs involving
        the automation and analysis of vital business processes. I began by meeting with portfolio management executives
        and looking into how we could apply available technology to aid in their work. Then, after agreeing on a basic
        design plan, I began the development of several applications.
      </p>
      <p>
        All of the programs I worked on at JPMorgan relied on SQL queries to a rich database, processed through a Java
        backend to reformat the information and provide crucial data analysis relating to identification of pivotal
        data points. Then, all of this information was passed to an intuitive and interactive frontend built largely
        using React.
      </p>
      <p>
        Once my several months at JPMC were finished, my programs had gone into development and were already being used
        daily by software engineers and portfolio managers across the company. While I cannot provide more specifics
        or details about the project, feel free to read more about the company on
        their <a href='https://www.jpmorganchase.com/' target='_blank' rel='noopener noreferrer'>website</a>.
      </p>
    </div>
  )
};

const speechContent = {
  header: 'Speech Recognition @ MIT\'s RLE',
  body: (
    <div>
      <p>
        The <a href='http://www.rle.mit.edu/speech/' target='_blank' rel='noopener noreferrer'>Speech Communication Group</a> in
        MIT's Research Laboratory of Electronics endeavors to understand and analyze
        human speech according to evolving phonetic theory. After years of developing models to comprehend different
        facets of speech, the lab recently began to implement these theories programmatically.
      </p>
      <p>
        During my time with the SCG, I helped develop many of the modules for detecting different phonetic categories,
        and I wrote the code for combining, training, and testing all of these modules.
        For ongoing updates on the project's progress, check out the SCG website, linked above.
      </p>
    </div>
  )
};

const zeroContent = {
  header: 'Zero Robotics @ MIT\'s SSL',
  body: (
    <div>
      <p>
        <a href='http://zerorobotics.mit.edu/' target='_blank' rel='noopener noreferrer'>Zero Robotics</a> is
        a program for high school students to learn how to code, through a space-themed programming
        competition. Many students across the world are introduced to writing code through a fun and
        interactive software tournament.
      </p>
      <p>
        During my semester with Zero Robotics, I helped to develop and test that year's game. Through communication and
        interaction with the participating students, I helped to improve the overall educational experience, and gain
        useful insights for designing the game the next year. Read more about Zero Robotic's ongoing events and
        competitions on their website, which is linked above. Also, feel free to read more about the
        MIT <a href='http://ssl.mit.edu/newsite/' target='_blank' rel='noopener noreferrer'>Space Systems Lab</a>!
      </p>
    </div>
  )
};

export default Experience;