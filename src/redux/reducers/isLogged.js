import * as ActionTypes from '../ActionTypes';

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return !state
        default:
            return state
    }
}

export default loggedReducer