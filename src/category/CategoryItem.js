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
        const {category} = this.props;
        return(
            <div>
                <div className="categoryItem"> 
                    <div>
                        <span className="cat1">{category.name}</span> 
                        <span className="cat2">{category.budget}</span>
                    </div>
                    <div>
                        {category.expenses.map((expense, index) => <ExpenseItem className="expenseItem" key={index} category={category} expense={expense}/>)}
                    </div>
                </div>
                <button onClick={this.handleOpenModal}>Edit Category</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="CategoryItem"
                    className="modal">
                    <button className="modalButton" onClick={this.handleCloseModal}>X</button>
                    <CategoryForm className="categoryForm" />
                    <ExpenseForm className="expenseForm" />
                    <button className="modalButton" onClick={this.handleDeleteCategory}>Delete</button>
                    <button className="modalButton" onClick={this.handleUpdateCategory}>Save</button>
                </ReactModal>
            </div>
        );
    }
}

export default connect(
    state => ({editCategory: state.editCategory, expenses: state.expenses }),
    {initCategoryUpdate, updateCategory, deleteCategory, getCategories, addExpenses}
)(CategoryItem);