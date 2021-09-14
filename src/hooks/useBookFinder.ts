import { useReducer, useEffect } from "react";
import bookFinderReducer from "../reducers/bookFinderReducer";
import AxiosInstace from "../services/AxiosInstace"
import { BookFinderResponse, Doc } from '../types/types';


export const useBookFinder = (bookTitle: string) => {

    const [books, dispatch] = useReducer(bookFinderReducer, {
        data: [],
        isLoading: false,
        error: false
    })


    const getBooksByTitle = async () => {
        try {
            const { data } = await AxiosInstace.get<BookFinderResponse>(`/search.json?title=${bookTitle}`);
            dispatch({
                type: 'success',
                payload: data.docs.map((book : Doc) => ({
                    id: book.key,
                    title: book.title,
                    author: book.author_name ? book.author_name.shift() : 'Unknown',
                    image: book.cover_i
                }))
            })
        } catch (error) {
            dispatch({
                type: 'error'
            })
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