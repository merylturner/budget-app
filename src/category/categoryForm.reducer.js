import * as actions from './categoryForm.constants';

const emptyCategory = () => ({ name: '', budget: '' });

export const editCategory = (state = emptyCategory(), { type, payload }) => {
    switch (type) {
    case actions.UPDATE_CATEGORY_BUDGET:
        return { budget: payload, name: state.name };
    case actions.UPDATE_CATEGORY_NAME:
        return { budget: state.budget, name: payload };
    case actions.INIT_CATEGORY_UPDATE:
        return Object.assign({}, payload || emptyCategory());
    default:
        return state;
    }
};

export const categories = (state = [], { type, payload }) => {
    switch (type) {
    case actions.FETCHED_CATEGORY:
        return payload;
    case actions.ADDED_CATEGORY:
        return [...state, payload];
    case actions.UPDATED_CATEGORY: {
        const index = state.findIndex(c => c._id === payload._id);
        if (index === -1) return state;
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

export const categoriesError = (state = null, { type, payload }) => {
    switch (type) {
    case actions.FETCHED_CATEGORY_ERROR:
    case actions.ADDED_CATEGORY_ERROR:
        return payload;
    case actions.FETCH_CATEGORY:
    case actions.ADD_CATEGORY:
        return null;
    default:
        return state;
    }
};

export const categoriesLoading = (state = false, {type, payload}) => {
    switch(type) {
    case actions.FETCH_CATEGORY:
    case actions.ADD_CATEGORY:
        return true;
    case actions.FETCHED_CATEGORY:
    case actions.ADDED_CATEGORY:
    case actions.FETCHED_CATEGORY_ERROR:
    case actions.ADDED_CATEGORY_ERROR:
        return false;
    default:
        return state;
    }
};