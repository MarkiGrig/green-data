const employeeReducer = (state = [], action) => {
    switch (action.type) {
    case 'REMOVE_EMPLOYEE': {
        return state.filter((item) => item.id !== action.id);
    }
    case 'ADD_EMPLOYEE': {
        return state.concat([action.employee]);
    }
    default:
        return state;
    }
};

export default employeeReducer;