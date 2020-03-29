export const removeEmployeeAction = (id) => ({
    type: 'REMOVE_EMPLOYEE',
    id
});

export const addEmployeeAction = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
});

export const changeEmployeeAction = (id, employee) => ({
    type: 'CHANGE_EMPLOYEE',
    id,
    employee
});