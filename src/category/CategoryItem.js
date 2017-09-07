import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import {initCategoryUpdate, updateCategory} from './categoryForm.actions';

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
    }

    handleOpenModal() {
        this.props.initCategoryUpdate(this.props.category);
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
        this.props.initCategoryUpdate();
    }

    handleUpdateCategory() {
        this.props.updateCategory()
            .then(() => this.handleCloseModal());
    }

    //handleDeleteCategory()

    render(){
        const {category} = this.props;
        return(
            <div>
                <div> {category.name}, {category.budget}</div>
                <button onClick={this.handleOpenModal}>+</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="CategoryItem">
                    <button onClick={this.handleCloseModal}>X</button>
                    <CategoryForm />
                    <button onClick={this.handleUpdateCategory}>Save</button>
                </ReactModal>
            </div>
        );
    }
}

export default connect(
    state => ({editCategory: state.editCategory}),
    {initCategoryUpdate, updateCategory}
)(CategoryItem);