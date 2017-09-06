import superagent from 'superagent';

export const API_URL = '/api';

const wrap = cmd => cmd
    .then(r => r.body,
        ({ response }) => {
            throw response.body.error;
        }
    );

export const request = {
    get(url){
        return wrap(superagent.get(`${API_URL}${url}`));
    },
    // get(url, id){
    //     return wrap(superagent.get(`${API_URL}${url}/${id}`));
    // },
    post(url, data){
        return wrap(superagent.post(`${API_URL}${url}`).send(data));
    },
    delete(url){
        return wrap(superagent.delete(`${API_URL}${url}`));
    }
};