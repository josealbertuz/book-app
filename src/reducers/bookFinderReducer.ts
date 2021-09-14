import { RequestState, BookListItemProps, RequestAction } from '../types/types';
export default (state : RequestState<BookListItemProps>, action: RequestAction<BookListItemProps>) : RequestState<BookListItemProps> => {

    switch (action.type) {
        case 'request':
            return {
                data: [],
                isLoading: true,
                error: false
            };

        case 'success':
            return {
                data: action.payload,
                isLoading: false,
                error: true
            };

        case 'error':
            return {
                data: [],
                isLoading: false,
                error: false
            }
    }
}