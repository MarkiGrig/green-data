import React from 'react';
import Table from './Table';
import { shallowEqual, useSelector } from 'react-redux';
import CustomTableRowContainer from '../CustomTableRow/CustomTableRowContainer';

const columns = [
    { id: 'fullName',  label: 'ФИО', required: true, content: 'string' },
    { id: 'position', label: 'Должность', required: true, content: 'string' },
    { id: 'birthDate', label: 'Дата рождения', required: false, content: 'number' },
    { id: 'sex', label: 'Пол', required: false, content: 'string' },
    { id: 'isDismissed', label: 'Уволен', required: false, content: 'string' },
    { id: 'colleagues', label: 'Коллеги', required: false, content: 'list-string' }
];

const EmployeeTableContainer = () => {
    const employees = useSelector(state => state.employeeState, shallowEqual);

    return (
        <Table
            data={ employees }
            columns={ columns }
            row={ (rowData, key) => <CustomTableRowContainer
                row={ rowData }
                key={ key }
                columns={ columns }
            /> }
        />
    );
};

export default EmployeeTableContainer;