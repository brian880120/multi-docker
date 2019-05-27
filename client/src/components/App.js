import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import OtherPage from './otherPage/OtherPage';
import FibPage from './fib/FibPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
                <Link to="/">Home</Link>
                <Link to="/otherpage">Other Page</Link>
            </header>
            <div>
                <Switch>
                    <Route exact path="/" component={FibPage} />
                    <Route path="/otherpage" component={OtherPage} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
