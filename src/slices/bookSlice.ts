import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstace from "../services/AxiosInstace";
import { RequestState, BookResponse } from '../types/types';

const initialState: RequestState<BookResponse> = {
    data: undefined,
    isLoading: false,
    error: false
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getBook: (state, action : PayloadAction<string>) => {
            state.isLoading = true;

            AxiosInstace.get<BookResponse>(`${action.payload}.json`)
                .then(({data}) => {
                    state.data = data;
                    state.isLoading = false;
                })
                .catch(_ => {
                    state.isLoading = false;
                    state.error = true;
                });
        }
    }
})

export const { getBook } = bookSlice.actions;

export default bookSlice.reducer;