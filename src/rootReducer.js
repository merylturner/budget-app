import { editCategory, categories, categoriesError, categoriesLoading } from './category/categoryForm.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    editCategory,
    categories,
    categoriesError,
    categoriesLoading
});