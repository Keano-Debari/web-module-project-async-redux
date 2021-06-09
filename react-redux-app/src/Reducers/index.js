import { combineReducers } from 'redux';

import Dog from './Dog';

const rootReducer = combineReducers({
  dog: Dog
});

export default rootReducer;