import React from 'react';
import Controls from './Controls';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {removeEmployeeAction, addEmployeeAction} from '../../actions/employeeActions';
import {clearCurrentEmployeeAction, selectEmployeeAction} from '../../actions/currentEmployeeActions';
import nanoid from 'nanoid';
import { switchErrorMessage } from '../../actions/errorMessageActions';

const ControlsContainer = () => {
    const dispatch = useDispatch();

    const currentEmployee = useSelector(state => state.currentEmployeeState, shallowEqual);

    const addEmployee = () => {
        if ((!!currentEmployee.name && !!currentEmployee.position) || currentEmployee.id.length === 0) {
            const id = nanoid();

            const newEmployee = {
                id: id,
                name: '',
                position: '',
                birthDay: null,
                sex: '',
                isDismissed: false,
                colleagues: []
            };

            dispatch(addEmployeeAction(newEmployee));
            dispatch(selectEmployeeAction(newEmployee));
        } else {
            dispatch(switchErrorMessage(true));
        }
    };

    const removeEmployee = () => {
        if (currentEmployee.id !== null) {
            dispatch(removeEmployeeAction(currentEmployee.id));
            dispatch(clearCurrentEmployeeAction());
            dispatch(switchErrorMessage(false));
        }
    };

    return (
        <Controls
            addEmployee={ addEmployee }
            removeEmployee={ removeEmployee }
            isActive={ !!currentEmployee.id }
        />
    );
};

export default ControlsContainer;