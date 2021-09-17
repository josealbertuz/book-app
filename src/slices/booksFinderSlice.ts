import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstace from "../services/AxiosInstace";
import { RequestState, BooksFound, BookFinderResponse } from '../types/types';
import { AppDispatch } from '../store/store';

const initialState : RequestState<BooksFound[]> = {
    data: [],
    isLoading: false,
    error: false
}

export const booksFinderSlice = createSlice({
    name: 'booksFound',
    initialState,
    reducers: {
        request: (state) => {
            state.isLoading = true;
        },
        success: (state, action: PayloadAction<BooksFound[]>) => {
            state.isLoading = false;
            state.data = action.payload
        },
        error: (state) => {
            state.isLoading = false;
            state.error = true
        }
    }
});

export default booksFinderSlice.reducer;

export const { success, request, error } = booksFinderSlice.actions;

export const getBooksByTitle = (bookTitle : string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(request());
        const { data } = await AxiosInstace.get<BookFinderResponse>(`/search.json?title=${bookTitle}`);
        dispatch(success(data.docs));  
    } catch (e) {
        dispatch(error());
    }
}
