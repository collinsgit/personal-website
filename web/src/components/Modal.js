import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

class CustomModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>
          <div style={{display: 'flex', width: 'inherit'}}>
            <div style={{width: '15%'}} />
            <div style={{minWidth: '60%', maxWidth: '80%', flex: '1 1', textAlign: 'center', lineHeight: '38px'}}>
              {this.props.content.header}
            </div>
            <div style={{width: '15%', textAlign: 'right'}}>
              <button className='btn ml-auto py-0' onClick={this.props.close} style={{fontSize: 24}}>
                <span>&times;</span>
              </button>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          {this.props.content.body}
        </ModalBody>
        <ModalFooter />
      </Modal>
    )
  }
}

export default CustomModal