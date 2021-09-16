import { useReducer, useEffect } from "react";
import bookFinderReducer from "../reducers/bookFinderReducer";
import AxiosInstace from "../services/AxiosInstace"
import { BookFinderResponse, RequestState} from '../types/types';


export const useBookFinder = (bookTitle: string) : 
RequestState<BookFinderResponse> => {

    const [books, dispatch] = useReducer(bookFinderReducer, {
        data: undefined,
        isLoading: false,
        error: false
    });

    const getBooksByTitle = async () => {
        try {
            const { data } = await AxiosInstace.get<BookFinderResponse>(`/search.json?title=${bookTitle}`);
            dispatch({
                type: 'success',
                payload: data
                })
        } catch (error) {
            dispatch({
                type: 'error'
            });
        }
    }

    useEffect(() => {

        let mounted = true;

        if (!bookTitle || !mounted) {
            return;
        }

        dispatch({
            type: 'request'
        });

        getBooksByTitle();

        return () => {
            mounted = false;
        }
        
    }, [bookTitle]);

    return books;
}