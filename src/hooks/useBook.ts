import { useReducer, useEffect } from "react"
import bookReducer from "../reducers/bookReducer"
import AxiosInstace from "../services/AxiosInstace";
import { BookResponse, RequestState } from '../types/types';

export default (bookId: string) : RequestState<BookResponse> => {

    const [book, dispatch] = useReducer(bookReducer, {
        data: undefined,
        isLoading: true,
        error: false
    });

    const getBookById = async () => {
        try {
            const { data } = await AxiosInstace.get<BookResponse>(`${bookId}.json`);
            
            dispatch({
                type: 'success',
                payload: data
            });
        } catch (error) {
            dispatch({type: 'error'});
        }
    }

    useEffect(() => {

        let mounted = true

        if(!mounted){
            return;
        }
        dispatch({type: 'request'});
        
        getBookById();

        return () => {
            mounted = false;
        }
    }, [bookId]);

    return book;

}