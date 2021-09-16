import { configureStore } from "@reduxjs/toolkit";
import booksFoundSlice from '../slices/booksFoundSlice';
import bookSlice from "../slices/bookSlice";

export const store = configureStore({
    reducer: {
        booksFound: booksFoundSlice,
        book: bookSlice
    }
});