import React from 'react';
import Controls from './Controls';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {removeEmployeeAction, addEmployeeAction} from '../../actions/employeeActions';
import {clearCurrentEmployeeAction} from '../../actions/currentEmployeeActions';

const ControlsContainer = () => {
    const dispatch = useDispatch();

    const currentEmployee = useSelector(state => state.currentEmployeeState, shallowEqual);

    const addEmployee = () => {
        dispatch(addEmployeeAction({
            id: 'yrg',
            name: 'Peter Griffin',
            position: 'Cleaner',
            birthDay: null,
            sex: null,
            isDismissed: null,
            colleagues: null
        }));
    };

    const removeEmployee = () => {
        if (currentEmployee.id !== null) {
            dispatch(removeEmployeeAction(currentEmployee.id));
            dispatch(clearCurrentEmployeeAction());
        }
    };

    return (
        <Controls
            addEmployee={ addEmployee }
            removeEmployee={ removeEmployee }
        />
    );
};

export default ControlsContainer;