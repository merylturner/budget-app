import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { initExpenseUpdate, deleteExpense, updateExpense } from './expenseForm.actions';
import {getCategories} from '../category/categoryForm.actions';

class ExpenseItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
        this.handleUpdateExpense = this.handleUpdateExpense.bind(this);
    }

    handleOpenModal() {
        this.props.initExpenseUpdate(this.props.expense);
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
        this.props.initExpenseUpdate();
    }

    handleUpdateExpense() {
        this.props.updateExpense(this.props.category._id, this.props.expense._id, this.props.expense)
            .then(() => this.handleCloseModal())
            .then(() => this.props.getCategories());
    }

    handleDeleteExpense() {
        this.props.deleteExpense(this.props.category._id, this.props.expense._id)
            .then(() => this.handleCloseModal())
            .then(() => this.props.getCategories());
    }

    render(){
        const { expense } = this.props;
        return (
            <div>
                <div className="expenseItem"> 
                    <span className="exp1">{expense.name}</span>
                    <span className="exp2">{expense.amount}
                        <button className="expenseButton" onClick={this.handleOpenModal}>Edit </button>
                    </span>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel='ExpenseItem'>
                    <button onClick={this.handleCloseModal}>X</button>
                    <ExpenseForm />
                    <button onClick={this.handleDeleteExpense}>Delete</button>
                    <button onClick={this.handleUpdateExpense}>Save</button>
                </ReactModal> 
            </div>
        );
    }
}

export default connect(
    state => ({ editExpense: state.editExpense}),
    {initExpenseUpdate, deleteExpense, getCategories, updateExpense}
)(ExpenseItem);

