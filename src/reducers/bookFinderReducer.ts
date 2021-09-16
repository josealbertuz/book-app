import { RequestState, RequestAction, BookFinderResponse } from '../types/types';
export default (state : RequestState<BookFinderResponse>, action: RequestAction<BookFinderResponse>) : RequestState<BookFinderResponse> => {

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
                error: true
            };

        case 'error':
            return {
                ...state,
                data: undefined,
                isLoading: false,
                error: false
            }
    }
}