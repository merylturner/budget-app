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
    addExpenses(id, expenses) {
        return request.post(`${API_URL}/${id}/expenses`)
            .send(expenses)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    deleteExpense(catId, expenseId) {
        return request.delete(`${API_URL}/${catId}/expenses/${expenseId}`)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    }
};