import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableTemplate from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import './Table.scss';

const Table = ({ data, columns, row }) => (
    <Paper className='table'>
        <TableContainer className={ 'table__container' }>
            <TableTemplate stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell
                                key={ column.id }
                                align='left'
                                className={ 'table__header-cell-container ' +
                                    `table__header-cell-container_${column.id}`
                                }
                            >
                                <div className={ `table__header-cell table__header-cell_${column.id}` }>
                                    <Typography variant='h6'>{column.label}</Typography>
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((employee) => row(
                        employee,
                        employee.id + 'Container'
                    ))}
                </TableBody>
            </TableTemplate>
        </TableContainer>
    </Paper>
);

export default Table;