import React from 'react';
import { connect } from 'react-redux';
import { updateExpenseName, updateExpenseAmount } from './expenseForm.actions';

export function ExpenseForm({ expense: { name, amount }, nameChange, amountChange}){
    return(
        <div>
            <label> Expense Name:
                <input value={name} onChange={({ target }) => nameChange(target.value)}></input>
            </label>
            <label> Expense Amount:
                <input value={amount} onChange={({ target }) => amountChange(target.value)}></input>
            </label>
        </div>
    );
}

export default connect(
    state => ({ expense: state.editExpense }),
    { nameChange: updateExpenseName, amountChange: updateExpenseAmount }
)(ExpenseForm);

