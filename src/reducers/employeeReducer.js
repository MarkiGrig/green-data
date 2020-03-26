const employeeReducer = (state = [], action) => {
    switch (action.type) {
    case 'REMOVE_EMPLOYEE': {
        return state.filter((item) => item.id !== action.id);
    }
    default:
        return state;
    }
};

export default employeeReducer;