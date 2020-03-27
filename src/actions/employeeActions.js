export const removeEmployeeAction = (id) => ({
    type: 'REMOVE_EMPLOYEE',
    id
});

export const addEmployeeAction = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
});