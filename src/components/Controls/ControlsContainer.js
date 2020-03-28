import React from 'react';
import Controls from './Controls';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {removeEmployeeAction, addEmployeeAction} from '../../actions/employeeActions';
import {clearCurrentEmployeeAction, selectEmployeeAction} from '../../actions/currentEmployeeActions';
import nanoid from 'nanoid';

const ControlsContainer = () => {
    const dispatch = useDispatch();

    const currentEmployee = useSelector(state => state.currentEmployeeState, shallowEqual);

    const addEmployee = () => {
        const id = nanoid();

        const newEmployee = {
            id: id,
            name: null,
            position: null,
            birthDay: null,
            sex: null,
            isDismissed: null,
            colleagues: null
        };

        dispatch(addEmployeeAction(newEmployee));
        dispatch(selectEmployeeAction(newEmployee));
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