import React from 'react';

class ModalButton extends React.Component {
  render() {
    return (
      <div className='modal-button mt-3 mx-2'
           style={{background: '#333a56', height: '221px', width: '315px'}}
           onClick={() => this.props.onClick(this.props.content)}>
        <div className='light-text header-text' style={{display: 'flex', flexFlow: 'column', height: '100%', justifyContent: 'space-around'}}>
          <h3>{this.props.text}</h3>
        </div>
        <img className='image-fluid modal-image' src={require('../images/' + this.props.background)}
             alt={this.props.background}
             style={{height: '100%', width: '100%', position: 'relative', top: '-221px'}} />
      </div>
    );
  }
}

export default ModalButton;