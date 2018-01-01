import React from 'react';
import { Button,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types'


 class CModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render() {

      var candidate = this.props.propsFromProf.callbackFromPrent.candidate;

      return (
        <div>
          <Button color="danger" onClick={this.toggle}>more</Button>
          <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 20 }}
            toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{candidate}</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle} >Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

//  Modal.propTypes = {
//  onClose: PropTypes.func.isRequired,
//  show: PropTypes.bool,
//  children: PropTypes.node
//};
//{this.props.buttonLabel}

export default CModal;
