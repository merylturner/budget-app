import * as actions from './expenseForm.constants';
import api from '../services/categoryAPI';

export function updateExpenseName(name = '') {
    return {
        type: actions.UPDATE_EXPENSE_NAME,
        payload: name
    };
}

export function updateExpenseAmount(amount = 0){
    return {
        type: actions.UPDATE_EXPENSE_AMOUNT,
        payload: amount
    };
}

export const makeAddExpense = api => category => (dispatch, getState) => {
    dispatch({ type: actions.ADD_EXPENSE });
    const {editExpense} = getState();
    console.log('expenses is ',editExpense);
    return api.addExpense(category,editExpense)
        .then(
            saved => {
                console.log('saved is', saved);
                dispatch({ type: actions.ADDED_EXPENSE, payload: saved });
            },
            err => {
                dispatch({ type: actions.ADDED_EXPENSE_ERROR, payload: err });
            }
        );
};

export const addExpense = makeAddExpense(api);

export function initExpenseUpdate(expense) {
    return {
        type: actions.INIT_EXPENSE_UPDATE,
        payload: expense
    };
}