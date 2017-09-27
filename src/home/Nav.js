import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../auth/actions';

const NavLink = props => <Link {...props}/>;

function Nav({user, signout}) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/" onClick={signout}>Logout</NavLink>
            <NavLink to="/auth/signin">Login</NavLink>
        </nav>
    );
}

export default connect(
    state => ({user: state.auth.user}),
    dispatch => ({
        signout() {
            dispatch(signout());
        }
    })
)(Nav);