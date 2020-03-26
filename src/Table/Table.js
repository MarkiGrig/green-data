import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableTemplate from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const columns = [
    { id: 'fullName',  label: 'ФИО' },
    { id: 'position', label: 'Должность' },
    { id: 'birthDate', label: 'Дата рождения' },
    { id: 'sex', label: 'Пол' },
    { id: 'dismissed', label: 'Уволен' },
    { id: 'colleagues', label: 'Коллеги'}
];

const Table = (props) => (
    <Paper>
        <TableContainer>
            <TableTemplate stickyHeader aria-label='Сотрудники'>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell
                                key={ column.id }
                                align='center'
                            >
                                <Typography variant='h3'>{ column.label }</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </TableTemplate>
        </TableContainer>
    </Paper>
);

export default Table;