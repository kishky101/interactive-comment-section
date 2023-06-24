import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger'
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }).concat([logger])
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// type TypedDispatch<T> = ThunkDispatch<T, unknown, AnyAction>;
 
// export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();