import { combineReducers } from "redux";

import { cryptoReducer } from "./crypto.reducer";

export const rootReducer = combineReducers({
    crypto: cryptoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
