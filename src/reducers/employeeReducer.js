const employeeReducer = (state = [], action) => {
    switch (action.type) {
    case 'REMOVE_EMPLOYEE': {
        return state.filter((item) => item.id !== action.id);
    }
    case 'ADD_EMPLOYEE': {
        return [action.employee, ...state];
    }
    case 'CHANGE_EMPLOYEE': {
        const newState = [...state];
        const ids = newState.map((item) => item.id);
        const index = ids.indexOf(action.id);
        if (index !== -1) {
            newState[index] = action.employee;
            return newState;
        }
        return state;
    }
    default:
        return state;
    }
};

export default employeeReducer;