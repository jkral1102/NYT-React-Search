import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';
import { BrowserRouter, Route } from 'react-router-dom'


const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter >
        <Route path="/" component={App}>
        
        </Route>
    </BrowserRouter>,
    app); 

