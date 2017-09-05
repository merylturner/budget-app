import {editCategory, categories} from './category/categoryForm.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    editCategory,
    categories
});