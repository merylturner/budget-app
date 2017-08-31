import { UPDATECATEGORYBUDGET, UPDATECATEGORYNAME } from './categoryForm.constants';

export default (state = {}, {type, payload}) => {
    switch(type) {
        case UPDATECATEGORYBUDGET:
            return {budget: payload, name: state.name};
        case UPDATECATEGORYNAME:
            return {budget: state.budget, name: payload};
        default:
            return state;
    }
}