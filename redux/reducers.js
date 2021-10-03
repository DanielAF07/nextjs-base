import { combineReducers } from 'redux';

import general from './general/reducer';

const reducers = combineReducers({
    general
});

export default reducers;