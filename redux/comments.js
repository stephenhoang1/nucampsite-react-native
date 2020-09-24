import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

            case ActionTypes.ADD_COMMENT:
                const comment = action.payload; //Add a unique id property to the new comment, based on the length of the comments array. 
                comment.id = state.comments.length;
                console.log("hello")
                return {...state, comments: state.comments.concat(comment)};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};