import { UPDATECATEGORYBUDGET, UPDATECATEGORYNAME } from './categoryForm.constants';

export function updateCategoryName(name = ''){
    return {
        type: UPDATECATEGORYNAME,
        payload: name
    }
}

export function updateCategoryBudget(budget = 0){
    return {
        type: UPDATECATEGORYBUDGET,
        payload: budget
    }
}