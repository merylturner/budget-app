import * as actions from './expenseForm.constants';
import {UPDATED_CATEGORY} from '../category/categoryForm.constants';
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

export const makeAddExpenses = api => category => (dispatch, getState) => {
    dispatch({ type: actions.ADD_EXPENSE });
    const {editExpense} = getState();
    return api.addExpenses(category,editExpense)
        .then(
            saved => {
                dispatch({ type: UPDATED_CATEGORY, payload: saved });
            },
            err => {
                dispatch({ type: actions.ADDED_EXPENSE_ERROR, payload: err });
            }
        );
};

export const addExpenses = makeAddExpenses(api);

export const makeUpdateExpense = api => (categoryId, expenseId, expense) => (dispatch, getState) => {
    dispatch({ type: actions.UPDATE_EXPENSE });
    return api.updateExpense(categoryId, expenseId, expense)
        .then(
            saved => {
                dispatch({type: actions.UPDATED_EXPENSE, payload: saved });
            },
            err => {
                dispatch({ type: actions.UPDATED_EXPENSE_ERROR, payload: err });
            }
        );
};

export const updateExpense = makeUpdateExpense(api);

export const makeDeleteExpense = api => (category, expense) => (dispatch, getState) => {
    dispatch({ type: actions.DELETE_EXPENSE });
    return api.deleteExpense(category, expense)
        .then(
            updated => {
                dispatch({ type: actions.DELETED_EXPENSE, payload: updated });
            },
            err => {
                dispatch({ type: actions.DELETED_EXPENSE_ERROR, payload: err });
            }
        );
};

export const deleteExpense = makeDeleteExpense(api);

export function initExpenseUpdate(expense) {
    return {
        type: actions.INIT_EXPENSE_UPDATE,
        payload: expense
    };
}