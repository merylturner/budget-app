import * as actions from './expenseForm.constants';

const emptyExpense = () => ({ name: '', amount: 0 });

export const editExpense = (state = emptyExpense(), { type, payload }) => {
    switch(type){
    case actions.UPDATE_EXPENSE_AMOUNT:
        return { amount: payload, name: state.name};
    case actions.UPDATE_EXPENSE_NAME:
        return { amount: state.amount, name: payload};
    case actions.INIT_EXPENSE_UPDATE:
        return Object.assign({}, payload || emptyExpense());
    default:
        return state;
    }
};

export const expenses = (state = [], { type, payload }) => {
    switch(type){
    case actions.ADDED_EXPENSE:
        return payload;
    case actions.UPDATED_EXPENSE: {
        const index = state.findIndex(e => e._id === payload._id);
        if(index === -1) return state;
        return [
            ...state.slice(0, index),
            payload,
            ...state.slice(index + 1)
        ];
    }
    default:
        return state;
    }
};

export const expensesError = (state = null, { type, payload }) => {
    switch(type) {
    case actions.ADDED_EXPENSE_ERROR:
        return payload;
    case actions.ADD_EXPENSE:
        return null;
    default:
        return state;
    }
};

export const expensesLoading = (state = false, { type, payload }) => {
    switch(type) {
    case actions.ADD_EXPENSE:
        return true;
    case actions.ADDED_EXPENSE:
    case actions.ADDED_EXPENSE_ERROR:
        return false;
    default:
        return state;
    }
};