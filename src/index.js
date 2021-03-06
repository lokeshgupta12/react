import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store'
import {BrowserRouter} from 'react-router-dom'

const store = configureStore()
const appElement = document.getElementById('root')


ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>, appElement);
