import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Auth from './auth/Auth';
import Dashboard from './Dashboard';
import Home from './home/Home';

import PrivateRoute from './PrivateRoute';

export const Routes = ({ user }) => {
    if (user) return (
        <Switch>
            <PrivateRoute path="/dashboard" render={() => <Dashboard className="dashboard"/>}/>
            <Redirect to="/" />
        </Switch>
    );
    else return (
        <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/auth" render={() => <Auth />} />
            <Redirect to="/" />
        </Switch>
    );
};

export default withRouter(connect(
    state => ({ user: state.auth.user }),
    null
))(Routes);