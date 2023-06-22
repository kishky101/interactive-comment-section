import { configureStore, createReducer } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
});