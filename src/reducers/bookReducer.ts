import { RequestState, BookResponse, RequestAction } from '../types/types';
export default (state: RequestState<BookResponse>, action: RequestAction<BookResponse>) 
: RequestState<BookResponse> => {
    switch (action.type) {
        case 'request':
            return {
                ...state,
                data: undefined,
                isLoading: true,
                error: false
            };

        case 'success':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };

        case 'error':
            return {
                ...state,
                data: undefined,
                isLoading: false,
                error: true
            }
    }
}