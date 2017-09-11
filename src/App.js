import React, { Component } from 'react';
import Dashboard from './Dashboard';
//add routes??

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">                    
                    <h2>Budge It</h2>
                </div>
                <Dashboard className="dashboard"/>
            </div>
        );
    }
}


export default App;
