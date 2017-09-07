import { editCategory, categories, categoriesError, categoriesLoading } from './category/categoryForm.reducer';
import { editExpense, expenses, expensesError, expensesLoading } from './expense/expenseForm.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    editCategory,
    categories,
    categoriesError,
    categoriesLoading,
    editExpense,
    expenses,
    expensesError,
    expensesLoading
});