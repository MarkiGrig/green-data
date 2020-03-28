import React from 'react';
import Table from './Table';
import { shallowEqual, useSelector } from 'react-redux';
import CustomTableRowContainer from '../CustomTableRow/CustomTableRowContainer';

const columns = [
    { id: 'fullName',  label: 'ФИО', required: true },
    { id: 'position', label: 'Должность', required: true },
    { id: 'birthDate', label: 'Дата рождения', required: false },
    { id: 'sex', label: 'Пол', required: false },
    { id: 'isDismissed', label: 'Уволен', required: false },
    { id: 'colleagues', label: 'Коллеги', required: false }
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