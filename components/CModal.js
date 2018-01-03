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

      let pageBySlug = DataStore.getPageBySlug('ezpedigacim');

    //  let acf = allPosts.acf;

      console.log('hello világ: ', DataStore.getAllPosts()[0]);
      console.log('pageBySlug: ', pageBySlug)
//    console.log(product.id);
      console.log('pagedata: ', DataStore.getPageBySlug('kovacs-bela').content);
      var candidate = this.props.propsFromProf.callbackFromPrent.candidate;
      var id = this.props.propsFromProf.callbackFromPrent.id;
//    console.log('#############################ID#######################', acf);
//              {DataStore.getAllPosts()[0].content.rendered} --> Modal body

      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Tovább</Button>
          <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 20 }}
            toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{candidate}</ModalHeader>
            <ModalBody>
              szöveg WP-ről:
                {DataStore.getPageBySlug('kovacs-bela').content.rendered}
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
