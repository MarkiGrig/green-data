import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import './EmployeeForm.scss';

const EmployeeForm = (
    {
        positions,
        employees,
        currentEmployee,
        handleNameInput,
        handlePositionChange,
        handleDateChange,
        handleSexChange,
        handleStatusChange,
        handleColleagueChange,
        isActive
    }) => {

    const getSecondaryInfo = (employee) => {
        return `${employee.position}` + (employee.birthDay ?
            `, Родился: ${employee.birthDay.getDate()}.` +
            `${employee.birthDay.getMonth()+1}.${employee.birthDay.getFullYear()}`
            : '');
    };

    return (
        <Paper className='employee-form'>
            <FormControl fullWidth required className='employee-form__control'>
                <FormLabel className='employee-form__label'>ФИО</FormLabel>
                <TextField
                    required
                    fullWidth
                    value={ currentEmployee.name }
                    onChange={ handleNameInput }
                    disabled={ !isActive }
                />
            </FormControl>
            <FormControl fullWidth required className='employee-form__control'>
                <FormLabel className='employee-form__label'>Должность</FormLabel>
                <TextField
                    select
                    onChange={ handlePositionChange }
                    fullWidth
                    required
                    value={ currentEmployee.position }
                    disabled={ !isActive }
                >
                    {positions.map(option => (
                        <MenuItem key={ option + 'selectPosition' } value={ option }>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
            <FormControl fullWidth className='employee-form__control'>
                <FormLabel className='employee-form__label'>Дата рождения</FormLabel>
                <DatePicker
                    clearable
                    value={ currentEmployee.birthDay }
                    minDate={ new Date(1900, 0) }
                    maxDate={ new Date() }
                    format="dd.MM.yyyy"
                    onChange={ date => handleDateChange(date) }
                    fullWidth
                    disabled={ !isActive }
                />
            </FormControl>
            <FormControl fullWidth disabled={ !isActive } className='employee-form__control'>
                <FormLabel className='employee-form__label'>Пол</FormLabel>
                <RadioGroup row name="sex" value={ currentEmployee.sex } onChange={ handleSexChange }>
                    <FormControlLabel value="Мужской" control={ <Radio color="primary"/> } label="Мужской" />
                    <FormControlLabel value="Женский" control={ <Radio color="primary"/> } label="Женский" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth disabled={ !isActive } className='employee-form__control'>
                <FormLabel className='employee-form__label'>Статус</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={ <Checkbox
                            checked={ currentEmployee.isDismissed }
                            onChange={ handleStatusChange }
                            name="isDismissed"
                            color="primary"
                        /> }
                        label="Уволен"
                    />
                </FormGroup>
            </FormControl>
            <FormControl fullWidth disabled={ !isActive } className='employee-form__control'>
                <FormLabel className='employee-form__label'>Коллеги</FormLabel>
                <Select
                    multiple
                    value={ currentEmployee.colleagues }
                    onChange={ handleColleagueChange }
                    input={ <Input /> }
                    renderValue={ selected => selected.join('; ') }
                >
                    {employees
                        //in order not to include dismissed colleagues
                        /*.filter(employee => !employee.isDismissed && employee.id !== currentEmployee.id)*/
                        .filter(employee => employee.id !== currentEmployee.id)
                        .map(employee => (
                            <MenuItem
                                key={ employee.id+'select' }
                                value={ employee.name + ', ' + getSecondaryInfo(employee) }
                            >
                                <Checkbox
                                    checked={
                                        currentEmployee.colleagues.indexOf(
                                            employee.name + ', ' + getSecondaryInfo(employee)
                                        ) > -1
                                    }
                                    color="primary"
                                />
                                <ListItemText
                                    primary={ employee.name }
                                    secondary={ getSecondaryInfo(employee) } />
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </Paper>
    );
};

export default EmployeeForm;