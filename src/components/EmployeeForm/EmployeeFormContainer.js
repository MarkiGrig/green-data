import React from 'react';
import EmployeeForm from './EmployeeForm';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeCurrentEmployeeAction } from '../../actions/currentEmployeeActions';
import { changeEmployeeAction } from '../../actions/employeeActions';
import { switchErrorMessage } from '../../actions/errorMessageActions';

const EmployeeFormContainer = () => {
    const dispatch = useDispatch();

    const {positions, employees, currentEmployee, errorMessageState} = useSelector(state => ({
        positions: state.positionsState,
        employees: state.employeeState,
        currentEmployee: state.currentEmployeeState,
        errorMessageState: state.errorMessageState
    }), shallowEqual);

    const handleNameInput = (e) => {
        const employee = {
            id: currentEmployee.id,
            name: e.target.value,
            position: currentEmployee.position,
            birthDay: currentEmployee.birthDay,
            sex: currentEmployee.sex,
            isDismissed: currentEmployee.isDismissed,
            colleagues: currentEmployee.colleagues
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
        dispatch(switchErrorMessage(false));
    };

    const handleDateChange = (date) => {
        const employee = {
            id: currentEmployee.id,
            name: currentEmployee.name,
            position: currentEmployee.position,
            birthDay: date,
            sex: currentEmployee.sex,
            isDismissed: currentEmployee.isDismissed,
            colleagues: currentEmployee.colleagues
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
    };

    const handlePositionChange = (e) => {
        const employee = {
            id: currentEmployee.id,
            name: currentEmployee.name,
            position: e.target.value,
            birthDay: currentEmployee.birthDay,
            sex: currentEmployee.sex,
            isDismissed: currentEmployee.isDismissed,
            colleagues: currentEmployee.colleagues
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
        dispatch(switchErrorMessage(false));
    };

    const handleSexChange = (e) => {
        const employee ={
            id: currentEmployee.id,
            name: currentEmployee.name,
            position: currentEmployee.position,
            birthDay: currentEmployee.birthDay,
            sex: e.target.value,
            isDismissed: currentEmployee.isDismissed,
            colleagues: currentEmployee.colleagues
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
    };

    const handleColleagueChange = (e) => {
        const employee = {
            id: currentEmployee.id,
            name: currentEmployee.name,
            position: currentEmployee.position,
            birthDay: currentEmployee.birthDay,
            sex: currentEmployee.sex,
            isDismissed: currentEmployee.isDismissed,
            colleagues: e.target.value
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
    };

    const handleStatusChange = (e) => {
        const employee = {
            id: currentEmployee.id,
            name: currentEmployee.name,
            position: currentEmployee.position,
            birthDay: currentEmployee.birthDay,
            sex: currentEmployee.sex,
            isDismissed: e.target.checked,
            colleagues: currentEmployee.colleagues
        };
        dispatch(changeCurrentEmployeeAction(employee));
        dispatch(changeEmployeeAction(currentEmployee.id, employee));
    };

    return (
        <EmployeeForm
            positions={ positions }
            employees={ employees }
            currentEmployee={ currentEmployee }
            handleNameInput={ handleNameInput }
            handlePositionChange={ handlePositionChange }
            handleDateChange={ handleDateChange }
            handleSexChange={ handleSexChange }
            handleStatusChange={ handleStatusChange }
            handleColleagueChange={ handleColleagueChange }
            isActive={ !!currentEmployee.id }
            errorMessageState={ errorMessageState }
        />
    );
};

export default EmployeeFormContainer;