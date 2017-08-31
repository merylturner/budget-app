import React from 'react';
import { connect } from 'react-redux';
import {updateCategoryBudget, updateCategoryName } from './categoryForm.actions';


export function CategoryForm(id = '', timestamp = '', name = '', budget = 0, dispatch){
    return(
        <div>
            <form>
                <label>Category Name:  
                <input onSubmit={({ target }) => dispatch(updateCategoryName(target.value))}></input>
                </label>
                <label>Category Budget:  
                <input onSubmit={({ target }) => dispatch(updateCategoryBudget(target.value))}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default connect(
    state => ({name: state.name, budget: state.budget, time: state.timestamp})
)(CategoryForm)