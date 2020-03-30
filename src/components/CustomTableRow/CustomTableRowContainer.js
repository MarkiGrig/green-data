import React from 'react';
import CustomTableRow from './CustomTableRow';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectEmployeeAction } from '../../actions/currentEmployeeActions';
import { switchErrorMessage } from '../../actions/errorMessageActions';

const CustomTableRowContainer = ({ row, columns }) => {
    const dispatch = useDispatch();

    const currentEmployee = useSelector(state => state.currentEmployeeState, shallowEqual);

    const handleRowClick = () => {
        if ((!!currentEmployee.name && !!currentEmployee.position) || currentEmployee.id.length === 0) {
            dispatch(selectEmployeeAction(row));
        } else {
            dispatch(switchErrorMessage(true));
        }
    };

    return (
        <CustomTableRow
            row={ row }
            columns={ columns }
            isActive={ () => row.id === currentEmployee.id }
            handleRowClick={ handleRowClick }
        />
    );
};

export default CustomTableRowContainer;