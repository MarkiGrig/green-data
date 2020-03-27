import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import employeeReducer from './reducers/employeeReducer';
import currentEmployeeReducer from './reducers/currentEmployeeReducer';

const reducers = combineReducers({
    employeeState: employeeReducer,
    currentEmployeeState: currentEmployeeReducer
});

const initialState = {
    currentEmployeeState: {},
    employeeState: [
        {
            id: 'air',
            name: 'Peter Griffin',
            position: 'Cleaner',
            birthDay: null,
            sex: null,
            isDismissed: null,
            colleagues: null
        },
        {
            id: 'yrg',
            name: 'Peter Griffin',
            position: 'Cleaner',
            birthDay: null,
            sex: null,
            isDismissed: null,
            colleagues: null
        }
    ]
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
