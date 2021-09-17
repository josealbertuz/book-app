import { configureStore } from "@reduxjs/toolkit";
import booksFinderSlice from '../slices/booksFinderSlice';
import bookSlice from "../slices/bookSlice";

export const store = configureStore({
    reducer: {
        booksFound: booksFinderSlice,
        book: bookSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;