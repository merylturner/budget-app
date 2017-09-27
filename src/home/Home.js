import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
    <p>
        <Link to="/auth/signin">Signin</Link>
        {' or '}
        <Link to="/auth/signup">Signup</Link>
        {' to get started.'}
    </p>
);

function Home() {
    return (
        <div>
            <h1>Welcome to Budge It!</h1>
            <GetStarted></GetStarted>
        </div>
    );
}

export default connect(
    state => ({user: state.auth.user})
)(Home);