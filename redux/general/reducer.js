import { MY_FIRST_ACTION } from '@redux/actions';

const INIT_STATE = {
    myFirstVariable: 'Hello World'
};

const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case MY_FIRST_ACTION:
            return {
                ...state,
                myFirstVariable: action.payload
            }
        default: return { ...state };
    }
}
export default AuthReducer;