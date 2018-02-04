import React              from  'react';
import { Button,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter }    from 'reactstrap';
import PropTypes          from 'prop-types';
import DataStore          from '../flux/stores/DataStore';




 class CModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        modal: false,
        posts: []
        };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render() {

      let pageBySlug = DataStore.getPageBySlug('kovacs-bela');
      var candidate = this.props.propsFromProf.callbackFromPrent.candidate;
      var id = this.props.propsFromProf.callbackFromPrent.id;

      console.log('wp-rest-api object:  ', pageBySlug);

      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Tovább</Button>
          <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 20 }}
            toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{candidate}</ModalHeader>
            <ModalBody dangerouslySetInnerHTML={{ __html: DataStore.getPageBySlug('kovacs-bela').content.rendered}}>
            

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle} > Kilépes </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }



export default CModal;
