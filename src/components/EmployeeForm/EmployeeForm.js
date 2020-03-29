import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import './EmployeeForm.scss';

const EmployeeForm = (
    {
        positions,
        employees,
        currentEmployee,
        handleNameInput
    }) => {
    const [selectedDate, handleDateChange] = useState(new Date(1912,0));//or null
    const [value, setValue] = React.useState('');
    const [state, setState] = React.useState({
        checkedA: false});
    const [personName, setPersonName] = React.useState([]);

    const handleRadioChange = event => {
        setValue(event.target.value);
    };
    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handlePersonChange = event => {
        setPersonName(event.target.value);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <Paper className='employee-form'>
            <FormLabel className='employee-form__label'>ФИО</FormLabel>
            <TextField
                required
                fullWidth
                value={ currentEmployee.name }
                onChange={ handleNameInput }
            />
            <FormLabel className='employee-form__label'>Должность</FormLabel>
            <TextField
                select
                onChange={ '' }
                fullWidth
                required
                value={ currentEmployee.position }
            >
                {positions.map(option => (
                    <MenuItem key={ option } value={ option }>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <FormLabel className='employee-form__label'>Дата рождения</FormLabel>
            <KeyboardDatePicker
                clearable
                value={ selectedDate }
                minDate={ new Date(1900, 0) }
                maxDate={ new Date() }
                format="dd.MM.yyyy"
                onChange={ date => handleDateChange(date) }
                fullWidth
            />
            <FormControl fullWidth>
                <FormLabel className='employee-form__label'>Пол</FormLabel>
                <RadioGroup row name="sex" value={ value } onChange={ handleRadioChange }>
                    <FormControlLabel value="Мужской" control={ <Radio color="primary"/> } label="Мужской" />
                    <FormControlLabel value="Женский" control={ <Radio color="primary"/> } label="Женский" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel className='employee-form__label'>Статус</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={ <Checkbox
                            checked={ state.checkedA }
                            onChange={ handleChange }
                            name="checkedA"
                            color="primary"
                        /> }
                        label="Уволен"
                    />
                </FormGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel className='employee-form__label'>Коллеги</FormLabel>
                <Select
                    multiple
                    value={ personName }
                    onChange={ handlePersonChange }
                    input={ <Input /> }
                    renderValue={ selected => selected.join(', ') }
                    MenuProps={ MenuProps }
                >
                    {employees.map(name => (
                        <MenuItem key={ name.id+'select' } value={ name.name }>
                            <Checkbox checked={ personName.indexOf(name.name) > -1 } color="primary"/>
                            <ListItemText primary={ name.name } />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Paper>
    );
};

export default EmployeeForm;