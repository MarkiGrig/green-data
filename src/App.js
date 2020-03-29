import React from 'react';
import './App.scss';
import EmployeeTableContainer from './components/Table/EmployeeTableContainer';
import ControlsContainer from './components/Controls/ControlsContainer';
import EmployeeFormContainer from './components/EmployeeForm/EmployeeFormContainer';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

function App() {
    return (
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
            <div className="App">
                <div className="App__group App__group_left">
                    <EmployeeTableContainer />
                    <ControlsContainer />
                </div>
                <EmployeeFormContainer />
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default App;
