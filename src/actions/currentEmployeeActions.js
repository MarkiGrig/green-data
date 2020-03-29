export const selectEmployeeAction = (employee) => ({
    type: 'SELECT_EMPLOYEE',
    employee
});

export const clearCurrentEmployeeAction = () => ({
    type: 'CLEAR_CURRENT-EMPLOYEE'
});

export const changeEmployeeAction = (employee) => ({
    type: 'CHANGE_EMPLOYEE',
    employee
});