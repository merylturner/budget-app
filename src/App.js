import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">                    
                    <h2>Budget App</h2>
                </div>
                <Dashboard className="dashboard"/>
            </div>
        );
    }
}

export default App;
