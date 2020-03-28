import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const chooseAlign = (contentType) => {
    switch (contentType) {
    case 'string': {
        return 'left';
    }
    case 'number': {
        return 'right';
    }
    case 'list': {
        return 'left';
    }
    default: {
        return 'left';
    }
    }
};

const CustomTableRow = ({ row, handleRowClick, isActive, columns }) => (
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
                <TableCell
                    key={ `${row.id}_${index}` }
                    align={ chooseAlign(columns[index].content) }
                >
                    {columns[index].required ?
                        row[employeeProperty] ? row[employeeProperty] : 'Обязательное поле'
                        : row[employeeProperty]}
                </TableCell>
            ))}
    </TableRow>
);

export default CustomTableRow;