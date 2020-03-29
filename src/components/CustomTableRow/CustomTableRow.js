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

const getCellString = (key, rowCell) => {
    if (rowCell !== null) {
        if (key === 'birthDay') {
            return `${rowCell.getDate()}.${rowCell.getMonth()+1}.${rowCell.getFullYear()}`;
        } else if (key === 'isDismissed') {
            return rowCell ? 'Да' : 'Нет';
        } else if (key === 'colleagues') {
            return rowCell.join('; ');
        } else {
            return rowCell;
        }
    }
    return null;
};

const renderItem = (required, key, rowCell) => {
    const string = getCellString(key, rowCell);

    if (required) {
        if (string) {
            return string;
        } else {
            return 'Обязательное поле';
        }
    }
    return string;
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
                    className={ 'table__data-cell-container'
                        + `table__header-cell-container_${columns[index].id}`
                    }
                >
                    <div className={ `table__data-cell table__data-cell_${columns[index].id}` }>
                        { renderItem(columns[index].required, employeeProperty, row[employeeProperty]) }
                    </div>
                </TableCell>
            ))}
    </TableRow>
);

export default CustomTableRow;