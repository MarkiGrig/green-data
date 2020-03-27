import React from 'react';
import Button from '@material-ui/core/Button';
import './Controls.scss';

const Controls = ({addEmployee, removeEmployee}) => (
    <div className={ 'controls' }>
        <Button
            variant="outlined"
            size='medium'
            color='primary'
            className='controls__item'
            type='button'
            onClick={ removeEmployee }
        >
            Удалить
        </Button>
        <Button
            variant="contained"
            size='medium'
            color='primary'
            className='controls__item'
            type='button'
            onClick={ addEmployee }
        >
            Добавить
        </Button>
    </div>
);

export default Controls;