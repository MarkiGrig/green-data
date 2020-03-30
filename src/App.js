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
                    <div className='App__controls'>
                        <ControlsContainer />
                    </div>
                </div>
                <div className='App__form'>
                    <EmployeeFormContainer />
                </div>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default App;
