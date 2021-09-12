import { BookFinderState, BookFinderAction } from '../types/types';
export default (state : BookFinderState, action: BookFinderAction) : BookFinderState => {

    switch (action.type) {
        case 'request':
            return {
                books: [],
                isLoading: true,
                error: false
            };

        case 'success':
            return {
                books: action.payload,
                isLoading: false,
                error: true
            };

        case 'error':
            return {
                books: [],
                isLoading: false,
                error: false
            }
    }
}