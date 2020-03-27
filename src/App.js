import React from 'react';
import './App.scss';
import EmployeeTableContainer from './components/Table/EmployeeTableContainer';
import ControlsContainer from './components/Controls/ControlsContainer';

function App() {
    return (
        <div className="App">
            <EmployeeTableContainer />
            <ControlsContainer />
        </div>
    );
}

export default App;
