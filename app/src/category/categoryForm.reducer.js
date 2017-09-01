import { UPDATE_CATEGORY_BUDGET, UPDATE_CATEGORY_NAME, ADD_CATEGORY, INIT_CATEGORY_UPDATE, UPDATE_CATEGORY } from './categoryForm.constants';

const emptyCategory = () => ({name: '', budget: ''});

export const editCategory = (state = emptyCategory(), {type, payload}) => {
    switch(type) {
    case UPDATE_CATEGORY_BUDGET:
        return {budget: payload, name: state.name};
    case UPDATE_CATEGORY_NAME:
        return {budget: state.budget, name: payload};
    case ADD_CATEGORY:
    case UPDATE_CATEGORY:
        return emptyCategory();
    case INIT_CATEGORY_UPDATE:
        return Object.assign({}, payload || emptyCategory());
    default:
        return state;
    }
};

export const categories = (state = [], {type, payload}) => {
    switch(type) {
    case ADD_CATEGORY:
        return [...state, payload];
    default:
        return state;
    }
};