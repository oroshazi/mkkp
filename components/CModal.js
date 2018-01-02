import React              from  'react';
import { Button,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter }    from 'reactstrap';
import PropTypes          from 'prop-types';




 class CModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }



    render() {
      //console.log(product.id);
    //  console.log('pagedata: ', DataStore.getPageBySlug('about'));
      var candidate = this.props.propsFromProf.callbackFromPrent.candidate;

      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Tovább</Button>
          <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 20 }}
            toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{candidate}</ModalHeader>
            <ModalBody>
              szöveg WP-ről:
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              o sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              o sea takimata sanctus est Lorem ipsum dolor sit amet.

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


//      //  {DataStore.getPageBySlug("pelda-jelolt1")}

export default CModal;
