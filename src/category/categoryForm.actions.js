import * as actions from './categoryForm.constants';
import api from '../services/categoryAPI';

export function updateCategoryName(name = '') {
    return {
        type: actions.UPDATE_CATEGORY_NAME,
        payload: name
    };
}

export function updateCategoryBudget(budget = 0) {
    return {
        type: actions.UPDATE_CATEGORY_BUDGET,
        payload: budget
    };
}

export function makeGetCategories(api) {
    return function () {
        return function (dispatch) {
            dispatch({ type: actions.FETCH_CATEGORY });

            return api.getAll()
                .then(
                    categories => {
                        dispatch({ type: actions.FETCHED_CATEGORY, payload: categories });
                    },
                    err => {
                        dispatch({ type: actions.FETCHED_CATEGORY_ERROR, payload: err.error });
                    }
                );
        };
    };
}

export const getCategories = makeGetCategories(api);

export const makeAddCategory = api => category => dispatch => {
    dispatch({ type: actions.ADD_CATEGORY });

    return api.add(category)
        .then(
            saved => {
                dispatch({ type: actions.ADDED_CATEGORY, payload: saved });
            },
            err => {
                dispatch({ type: actions.ADDED_CATEGORY_ERROR, payload: err });
            }
        );
};

export const addCategory = makeAddCategory(api);


export const makeUpdateCategory = api => category => dispatch => {
    dispatch({ type: actions.UPDATE_CATEGORY });

    return api.add(category)
        .then(
            saved => {
                dispatch({ type: actions.UPDATED_CATEGORY, payload: saved });
            },
            err => {
                dispatch({ type: actions.UPDATED_CATEGORY_ERROR, payload: err });
            }
        );
};

export const updateCategory = makeUpdateCategory(api);

export function initCategoryUpdate(category) {
    return {
        type: actions.INIT_CATEGORY_UPDATE,
        payload: category
    };
}