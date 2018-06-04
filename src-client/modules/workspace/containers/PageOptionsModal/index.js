import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions, ADD_NEW } from './actions.js';

import { Modal, Button } from 'react-bootstrap';
import { PageComponentForm } from 'components';

class Container extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleSelectTab = this.handleSelectTab.bind(this);
    }

    handleClose(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.hideModal();
    }

    /**
     * 
     * @param {*} e
     * 保存数据 
     */
    handleSave(e){
        e.stopPropagation();
        e.preventDefault();
        const { componentModel, change } = this.props;
        const options = this.refs.formPageName.getOptions();
        change(options, componentModel.mode);
    }

    handleSelectTab(eventKey){
    }

    render(){
        const { componentModel, deskPageModel, hideModal } = this.props;
        return (
            <Modal show={componentModel.show}
                   onHide={hideModal}
                   dialogClassName='umy-modal-overlay umy-modal-middlesize'
                   backdrop={true}
                   keyboard={true}
                   bsSize='large'
                   ref='dialog'
                   animation={true}>
                <Modal.Header closeButton={false} aria-labelledby='contained-modal-title'>
                    <Modal.Title id='contained-modal-title'>Page options</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSave}>
                    <Modal.Body>
                            <PageComponentForm
                                ref="formPageName"
                                pageName={componentModel.mode === ADD_NEW ? 'NewPage' : deskPageModel.currentPageName}
                                pagePath={componentModel.mode === ADD_NEW ? '/new-page' : deskPageModel.currentPagePath}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button
                            onClick={this.handleSave}
                            bsStyle="primary"
                            type="submit">
                            Save changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }

}

export default connect(modelSelector, containerActions)(Container);

