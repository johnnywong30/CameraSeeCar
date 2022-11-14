import { combineReducers } from 'redux';
import parking from './parkingReducer';

const rootReducer = combineReducers({
    parking
});

export default rootReducer;