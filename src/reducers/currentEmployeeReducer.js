const currentEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SELECT_EMPLOYEE': {
        return state.id !== action.employee.id ? action.employee : state;
    }
    case 'CHANGE_EMPLOYEE': {
        return action.employee;
    }
    case 'CLEAR_CURRENT-EMPLOYEE': {
        return {};
    }
    default:
        return state;
    }
};

export default currentEmployeeReducer;