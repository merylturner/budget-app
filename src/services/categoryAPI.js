import request from 'superagent';

const API_URL = '/api/categories';

export default {
    getAll() {
        return request.get(API_URL)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    get(id) {
        return request.get(`${API_URL}/${id}`)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    add(category) {
        return request.post(API_URL)
            .send(category)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    update(category, id) {
        return request.put(`${API_URL}/${id}`)
            .send(category)
            .then(
                res => res.body,
                err => {throw err.response.body;}
            );
    },
    delete(id) {
        return request.delete(`${API_URL}/${id}`)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    addExpense(id, expense) {
        console.log('id is', id, 'expense is', expense);
        return request.post(`${API_URL}/${id}/expenses`)
            .send(expense)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    }
};