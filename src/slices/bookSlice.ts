import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstace from "../services/AxiosInstace";
import { RequestState, BookResponse } from '../types/types';
import { AppDispatch } from '../store/store';

const initialState: RequestState<BookResponse> = {
    data: undefined,
    isLoading: false,
    error: false
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        request: (state) => {
            state.isLoading = true;
        },
        success: (state, action: PayloadAction<BookResponse>) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        error: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
})

export const { request, success, error } = bookSlice.actions;

export default bookSlice.reducer;

export const getBookById = (bookId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(request());
        const {data} = await AxiosInstace.get<BookResponse>(`${bookId}.json`);
        dispatch(success(data));
    } catch (e) {
        dispatch(error());
    }
}