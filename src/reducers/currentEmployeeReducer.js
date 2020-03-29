const currentEmployeeReducer = (state = {
    id: '',
    name: '',
    position: '',
    birthDay: null,
    sex: '',
    isDismissed: '',
    colleagues: []
}, action) => {
    switch (action.type) {
    case 'SELECT_EMPLOYEE': {
        return state.id !== action.employee.id ? action.employee : state;
    }
    case 'CHANGE_CURRENT-EMPLOYEE': {
        return action.employee;
    }
    case 'CLEAR_CURRENT-EMPLOYEE': {
        return {
            id: '',
            name: '',
            position: '',
            birthDay: null,
            sex: '',
            isDismissed: false,
            colleagues: []
        };
    }
    default:
        return state;
    }
};

export default currentEmployeeReducer;