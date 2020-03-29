import React from 'react';
import EmployeeForm from './EmployeeForm';
import {shallowEqual, useSelector} from 'react-redux';

const EmployeeFormContainer = () => {
    const positions = useSelector(state => state.positionsState, shallowEqual);
    const employees = useSelector(state => state.employeeState, shallowEqual);

    return (
        <EmployeeForm positions={ positions } employees={ employees }/>
    );
};

export default EmployeeFormContainer;