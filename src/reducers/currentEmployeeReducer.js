const currentEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SELECT_EMPLOYEE': {
        return state.id !== action.employee.id ? action.employee : state;
    }
    default:
        return state;
    }
};

export default currentEmployeeReducer;