// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './reducer'; // Import your reducer

const rootReducer = combineReducers({
  users: usersReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
