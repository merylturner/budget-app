import { request } from './request';

const URL = '/categories';

export default {
    getAll(){
        return request.get(URL);
    },
    get(id){
        return request.get(`${URL}/${id}`);
    },
    add(category){
        return request.post(URL, category);
    },
    delete(id){
        return request.delete(`${URL}/${id}`);
    }
    //add expense, delete expense
    // add(category, expense){
    // return request.post(URL, category, expense)
    // }
};