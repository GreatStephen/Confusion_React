import * as ActionTypes from './ActionTypes';

// export const InitialFeedback = {
//     firstname: '',
//     lastname: '',
//     telnum: '',
//     email: '',
//     agree: false,
//     contactType: 'Tel.',
//     message: ''
// };

export const Feedback = (state  = { 
    // isLoading: true,
    errMess: null,
    feedback:[]}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {...state, errMess: null, feedback: action.payload};

        default:
            return state;
    }
};