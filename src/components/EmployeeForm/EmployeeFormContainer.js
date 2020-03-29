import React from 'react';
import EmployeeForm from './EmployeeForm';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeEmployeeAction } from '../../actions/currentEmployeeActions';

const EmployeeFormContainer = () => {
    const dispatch = useDispatch();

    const {positions, employees, currentEmployee} = useSelector(state => ({
        positions: state.positionsState,
        employees: state.employeeState,
        currentEmployee: state.currentEmployeeState
    }), shallowEqual);

    const handleNameInput = (component, value) => {
        dispatch(changeEmployeeAction({
            id: currentEmployee.id,
            name: value,
            position: currentEmployee.position,
            birthDay: currentEmployee.birthDay,
            sex: currentEmployee.sex,
            isDismissed: currentEmployee.isDismissed,
            colleagues: currentEmployee.colleagues
        }));
    };

    return (
        <EmployeeForm
            positions={ positions }
            employees={ employees }
            currentEmployee={ currentEmployee }
            handleNameInput={ handleNameInput }
        />
    );
};

export default EmployeeFormContainer;