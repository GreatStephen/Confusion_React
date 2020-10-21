import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentModalOpen: false
        };

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }

    handleCommentSubmit(values) {
        this.toggleCommentModal();
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
        // console.log("Current State is:" + JSON.stringify(values));
        // alert("Current State is:" + JSON.stringify(values));
    }

    render () {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleCommentModal}>
                    <span className='fa fa-pencil fa-lg'></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleCommentSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='rating' md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model='.rating' name='rating' className='form-control'>
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='name' md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model='.name' id='name' name='name'
                                        className='form-control' placeholder='Your Name'
                                        validators={{
                                             minLength: minLength(3), maxLength: maxLength(15)
                                         }} />
                                    <Errors  
                                        className='text-danger'
                                        model=".name"
                                        show='touched'
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                </Col>

                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='comment' md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model='.comment' id='comment' name='comment'
                                        rows='6' className='form-control' />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={12}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default CommentForm;