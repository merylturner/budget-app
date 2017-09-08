import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import {initCategoryUpdate, updateCategory, deleteCategory, getCategories} from './categoryForm.actions';
import ExpenseItem from '../expense/ExpenseItem';
import ExpenseForm from '../expense/ExpenseForm';
import { addExpenses } from '../expense/expenseForm.actions';

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
        this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
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
        this.props.updateCategory(this.props.category._id)
            .then(() => this.props.addExpenses(this.props.category._id, this.props.expenses))
            .then(() => this.handleCloseModal());
    }

    handleDeleteCategory() {
        this.props.deleteCategory(this.props.category._id)
            .then(() => this.handleCloseModal())
            .then(() => this.props.getCategories());
    }

    render(){
        const {category, expenses} = this.props;
        return(
            <div>
                <div> {category.name}, {category.budget}</div>
                <button onClick={this.handleOpenModal}>Edit</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="CategoryItem">
                    <button onClick={this.handleCloseModal}>X</button>
                    <CategoryForm />
                    <ExpenseForm />
                    <button onClick={this.handleDeleteCategory}>Delete</button>
                    <button onClick={this.handleUpdateCategory}>Save</button>
                </ReactModal>
                {expenses.map((expense, index) => <ExpenseItem key={index} expense={expense}/>)}
            </div>
        );
    }
}

export default connect(
    state => ({editCategory: state.editCategory, expenses: state.expenses }),
    {initCategoryUpdate, updateCategory, deleteCategory, getCategories, addExpenses}
)(CategoryItem);