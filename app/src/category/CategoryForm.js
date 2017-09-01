import React from 'react';
import {connect} from 'react-redux';
import {updateCategoryName, updateCategoryBudget} from './categoryForm.actions';


export function CategoryForm({category: {name, budget}, nameChange, budgetChange}){
    return(
        <div>
            <label>Category Name:  
                <input value={name} onChange={({ target }) => nameChange(target.value)}></input>
            </label>
            <label>Category Budget:  
                <input value={budget} onChange={({ target }) => budgetChange(target.value)}></input>
            </label>
        </div>
    );
}


export default connect(
    state => ({category: state.editCategory}),
    {nameChange: updateCategoryName, budgetChange: updateCategoryBudget}
)(CategoryForm);