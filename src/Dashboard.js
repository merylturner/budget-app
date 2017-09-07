import React, { Component } from 'react';
import CategoryForm from './category/CategoryForm';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import CategoryItem from './category/CategoryItem';
import {addCategory, getCategories} from './category/categoryForm.actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
    }

    componentWillMount() {
        this.props.getCategories();
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    handleAddCategory() {
        this.props.addCategory()
            .then(() => this.handleCloseModal());
    }

    render(){
        const {categories} = this.props;
        return(
            <div>
                {categories.map((category, index) => <CategoryItem key={index} category={category}/>)}
                <button onClick={this.handleOpenModal}>+</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Dashboard">
                    <button onClick={this.handleCloseModal}>X</button>
                    <CategoryForm />
                    <button onClick={this.handleAddCategory}>Save</button>
                </ReactModal>
            </div>
        );
    }
}

export default connect(
    state => ({categories: state.categories}),
    {addCategory, getCategories}
)(Dashboard);