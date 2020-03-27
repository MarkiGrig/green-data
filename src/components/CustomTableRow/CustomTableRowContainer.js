import React from 'react';
import CustomTableRow from './CustomTableRow';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { selectEmployeeAction } from '../../actions/currentEmployeeActions';

const CustomTableRowContainer = ({ row }) => {
    const dispatch = useDispatch();

    const currentEmployee = useSelector(state => state.currentEmployeeState, shallowEqual);

    const handleRowClick = () => {
        dispatch(selectEmployeeAction(row));
    };

    return (
        <CustomTableRow
            row={ row }
            isActive={ () => row.id === currentEmployee.id }
            handleRowClick={ handleRowClick }
        />
    );
};

export default CustomTableRowContainer;