import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';

render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('root')
);
