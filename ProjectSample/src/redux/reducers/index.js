import {combineReducers} from 'redux';
import {tokenAppReducer} from './tokenReducer';

const rootReducer = combineReducers({
  tokenAppReducer,
});

export default rootReducer;
