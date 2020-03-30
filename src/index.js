import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import employeeReducer from './reducers/employeeReducer';
import currentEmployeeReducer from './reducers/currentEmployeeReducer';
import positionsReducer from './reducers/positionsReducer';

const reducers = combineReducers({
    employeeState: employeeReducer,
    currentEmployeeState: currentEmployeeReducer,
    positionsState: positionsReducer
});

const initialState = {
    currentEmployeeState: {
        id: '',
        name: '',
        position: '',
        birthDay: null,
        sex: '',
        isDismissed: false,
        colleagues: []
    },
    positionsState: [
        'Генеральный директор',
        'Заместитель генерального директора',
        'Глава экономического отдела',
        'HR специалист',
        'Senior Frontend разработчик',
        'Middle Frontend разработчик',
        'Junior Frontend разработчик',
        'Senior Backend разработчик',
        'Middle Backend разработчик',
        'Junior Backend разработчик',
        'Уборщик'
    ],
    employeeState: [
        {
            id: 'air',
            name: 'Peter Griffin Evil',
            position: 'Уборщик',
            birthDay: new Date(2012, 11, 12),
            sex: 'Мужской',
            isDismissed: true,
            colleagues: []
        },
        {
            id: 'yrg',
            name: 'Peter Griffin',
            position: 'Junior Backend разработчик',
            birthDay: null,
            sex: '',
            isDismissed: false,
            colleagues: []
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
