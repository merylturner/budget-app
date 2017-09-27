import React from 'react';

export default ({submit, allowName = false}) => (
    <form onSubmit={e => {
        e.preventDefault();
        const {elements} = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
            obj[key] = elements[key].value;
            return obj;
        }, {});
        submit(data);
    }}>
        { allowName && <label>Name: <input name="name"/></label>}
        <label>Email: <input name="email"/></label>
        <label>Password: <input name="password" type="password"/></label>
        <button>Login</button>
    </form>
);