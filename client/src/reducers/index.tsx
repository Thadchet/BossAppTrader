import { combineReducers } from "redux";

import { cryptoReducer } from "./crypto.reducer";
import { spinnerReducer } from "./spinner.reducer";

export const rootReducer = combineReducers({
  crypto: cryptoReducer,
  spinner: spinnerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
