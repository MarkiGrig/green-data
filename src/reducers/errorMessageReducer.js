const errorMessageReducer = (state = false, action) => {
    switch (action.type) {
    case 'SWITCH_ERROR_MESSAGE': {
        return action.newState;
    }
    default: {
        return state;
    }
    }
};

export default errorMessageReducer;