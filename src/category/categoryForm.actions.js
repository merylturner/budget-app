import { UPDATE_CATEGORY_BUDGET, UPDATE_CATEGORY_NAME, ADD_CATEGORY, INIT_CATEGORY_UPDATE, UPDATE_CATEGORY } from './categoryForm.constants';

export function updateCategoryName(name = ''){
    return {
        type: UPDATE_CATEGORY_NAME,
        payload: name
    };
}

export function updateCategoryBudget(budget = 0){
    return {
        type: UPDATE_CATEGORY_BUDGET,
        payload: budget
    };
}

export function addCategory() {
    return (dispatch, getState) => {
        const {editCategory} = getState();
        //call to API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({type: ADD_CATEGORY, payload: editCategory});
                resolve();
            });
        });
    };
}

export function initCategoryUpdate(category) {
    return {
        type: INIT_CATEGORY_UPDATE,
        payload: category
    };
}

export function updateCategory() {
    return (dispatch, getState) => {
        const {editCategory} = getState();
        //call to API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({type: UPDATE_CATEGORY, payload: editCategory});
                resolve();
            });
        });
    };
}
