import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstace from "../services/AxiosInstace";
import { RequestState, BooksFound, BookFinderResponse } from '../types/types';

const initialState : RequestState<BooksFound[]> = {
    data: [],
    isLoading: false,
    error: false
}

export const booksFoundSlice = createSlice({
    name: 'booksFound',
    initialState,
    reducers: {
        getBooks: (state, action: PayloadAction<string>) => {
            state.isLoading = true;

            AxiosInstace.get<BookFinderResponse>(`/search.json?title=${action.payload}`)
                .then(({data}) => {
                    state.data = data.docs;
                    state.isLoading = false;
                })
                .catch(_ => {
                    state.isLoading = false;
                    state.error = true;
                });
        }
    }
});

export const { getBooks } = booksFoundSlice.actions;
export default booksFoundSlice.reducer;