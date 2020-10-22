import * as ActionTypes from './ActionTypes';

// reducer function for comments
// take a state and an action, return the next state
export const Comments = (state = { 
    errMess: null, 
    comments:[]}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // console.log("Comment: ", comment);
            return {...state, comments:state.comments.concat(comment)};

        default:
          return state;
      }
};