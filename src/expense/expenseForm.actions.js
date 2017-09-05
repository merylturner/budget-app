import { UPDATE_EXPENSE_AMOUNT, UPDATE_EXPENSE_NAME, ADD_EXPENSE, INIT_EXPENSE_UPDATE, UPDATE_EXPENSE } from './expenseForm.constants';

export function updateExpenseName(name = '') {
    return {
        type: UPDATE_EXPENSE_NAME,
        payload: name
    };
}

export function updateExpenseAmount(amount = 0){
    return {
        type: UPDATE_EXPENSE_AMOUNT,
        payload: amount
    };
}

export function addExpense() {
    return (dispatch, getState) => {
        const {editExpense} = getState();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({type: ADD_EXPENSE, payload: editExpense});
                resolve();
            });
        });
    };
}

