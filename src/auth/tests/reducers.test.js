import assert from 'assert';
import * as actions from '../constants';
import auth, { user, token, error } from '../reducers';

describe('combined Auth reducer', () => {
    it('initial value', () => {
        assert.deepEqual(auth(undefined, { type: 'NO_ACTION'}), { user: null, token: null, error: null });
    });

    it('pass through', () => {
        const state = { user: null, token: null, error: null };
        assert.strictEqual(auth(state, { type: 'NO_ACTION' }), state);
    });
});

describe('User reducer', () => {
    it('initial value', () => {
        assert.deepEqual(user(undefined, { type: 'NO_ACTION' }), null);
    });

    it('pass through', () => {
        const state = 'user';
        assert.strictEqual(user(state, { type: 'NO_ACTION' }), state);
    });

    it('fetched user', () => {
        const userState = { name: 'user' };
        assert.deepEqual(user(null, {
            type: actions.FETCHED_USER, payload: userState
        }), userState);
    });

    it('LOGOUT and AUTH FAILED clears user', () => {
        assert.equal(user({}, { type: actions.LOGOUT }), null);
        assert.equal(user({}, { type: actions.AUTH_FAILED }), null);
    });
});

describe('Token reducer', () => {
    it('initial value', () => {
        assert.deepEqual(token(undefined, { type: 'NO_ACTION' }), null);
    });

    it('pass through', () => {
        const state = 'token';
        assert.strictEqual(token(state, { type: 'NO_ACTION' }), state);
    });

    it('GOT token adds token', () => {
        const tokenState = { name: 'token' };
        assert.deepEqual(token(null, {
            type: actions.GOT_TOKEN, payload: tokenState
        }), tokenState);
    });

    it('LOGOUT and AUTH FAILED clears token', () => {
        assert.equal(token({}, { type: actions.LOGOUT }), null);
        assert.equal(token({}, { type: actions.AUTH_FAILED }), null);
    });
});

describe('Error reducer', () => {
    it('initial value', () => {
        assert.deepEqual(error(undefined, { type: 'NO_ACTION' }), null);
    });

    it('pass through', () => {
        const state = 'error';
        assert.strictEqual(error(state, { type: 'NO_ACTION' }), state);
    });

    it('AUTH_FAILED adds error', () => {
        const errorState = { name: 'error' };
        assert.deepEqual(error(null, {
            type: actions.AUTH_FAILED, payload: errorState
        }), errorState);
    });

    it('LOGOUT, GOT TOKEN, FETCHED USER clears errors', () => {
        assert.equal(error({}, { type: actions.LOGOUT }), null);
        assert.equal(error({}, { type: actions.FETCHED_USER }), null);
        assert.equal(error({}, { type: actions.GOT_TOKEN }), null);
    });
});