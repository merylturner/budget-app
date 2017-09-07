import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { initExpenseUpdate } from './expenseForm.actions';
//add updateExpense

class ExpenseItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        // this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.props.initExpenseUpdate(this.props.expense);
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
        this.props.initExpenseUpdate();
    }

    render(){
        const { expense } = this.props;
        return (
            <div>
                <div> {expense.name}, {expense.amount}</div>
                <button onClick={this.handleOpenModal}>+</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel='ExpenseItem'>
                    <button onClick={this.handleCloseModal}>X</button>
                    <ExpenseForm />
                    <button onClick={this.handleUpdateExpense}>Save</button>
                </ReactModal> 
            </div>
        );
    }
}

export default connect(
    state => ({ editExpense: state.editExpense }),
    {initExpenseUpdate}
)(ExpenseItem);

//add updateexpense