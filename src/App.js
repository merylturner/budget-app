import React, { Component } from 'react';
// import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { checkForToken } from './auth/actions';

class App extends Component {
    componentDidMount(){
        this.props.checkForToken();
    }

    render() {
        return (
            <Router>
                <Routes />
            </Router>
            // <div className="App">
            //     <div className="App-header">                    
            //         <h2>Budge It</h2>
            //     </div>
            //     <Dashboard className="dashboard"/>
            // </div>
        );
    }
}

export default connect(
    null,
    { checkForToken }
)(App);