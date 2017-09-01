import React, { Component } from 'react';
import CategoryForm from './category/CategoryForm';
import ReactModal from 'react-modal';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render(){
        return(
            <div>
                <button onClick={this.handleOpenModal}>+</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Dashboard">
                    <CategoryForm />
                    <button onClick={this.handleCloseModal}>X</button>
                </ReactModal>
            </div>
        )
    }
}