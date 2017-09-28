import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';

function Auth({ user, signin, signup, error, location }) {
    const redirect = location.state ? location.state.from : '/';

    if(user) return <Redirect to={redirect}/>;

    return (
        <div>
            <Switch>
                <Route path="/auth/signin" component={() => (
                    <div>
                        <p>Not yet registered? <Link to="/auth/signup">Sign up here.</Link></p>
                        <Credentials submit={(credentials) => signin(credentials)}/>
                    </div>
                )}/>
                <Route path="/auth/signup" component={() => (
                    <div>
                        <p>Already have an account? <Link to="/auth/signin">Sign in here.</Link></p>
                        <Credentials submit={(credentials) => signup(credentials)} allowName={true}/>
                    </div>
                )}/>
            </Switch>
            {error && <p>{error}</p>}
        </div>
    );
}

export default withRouter(connect(
    ({ auth }) => ({
        error: auth.error,
        user: auth.user
    }),
    { signup, signin }
)(Auth));