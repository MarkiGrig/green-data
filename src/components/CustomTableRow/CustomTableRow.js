import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableRow = ({ row, handleRowClick, isActive }) => (
    <TableRow
        key={ row.id }
        onClick={ event => handleRowClick(event, row.id) }
        className={
            'table__row ' +
            (isActive() ?
                'table__row_checked'
                : '')
        }
    >
        {Object.keys(row)
            .filter(key => key !== 'id')
            .map((employeeProperty, index) => (
                <TableCell key={ `${row.id}_${index}` }>
                    {row[employeeProperty]}
                </TableCell>
            ))}
    </TableRow>
);

export default CustomTableRow;