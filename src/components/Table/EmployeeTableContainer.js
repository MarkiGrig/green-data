import React from 'react';
import Table from './Table';
import { shallowEqual, useSelector } from 'react-redux';

const columns = [
    { id: 'fullName',  label: 'ФИО' },
    { id: 'position', label: 'Должность' },
    { id: 'birthDate', label: 'Дата рождения' },
    { id: 'sex', label: 'Пол' },
    { id: 'dismissed', label: 'Уволен' },
    { id: 'colleagues', label: 'Коллеги'}
];

const EmployeeTableContainer = () => {
    const employees = useSelector(state => state.employeeState, shallowEqual);

    return (
        <Table
            data={ employees }
            columns={ columns }
        />
    );
};

export default EmployeeTableContainer;