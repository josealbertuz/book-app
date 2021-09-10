import { useState, useEffect } from "react";
import AxiosInstace from "../services/AxiosInstace"
import { BookSearchResponse, Doc, BookSearchState } from '../types/types';


export const useBookFinder = (bookTitle: string) => {

    const [bookResponse, setBooksResponse] = useState<BookSearchState>({
        books: [],
        isLoading: false,
        error: false
    });

    const getBooksByTitle = async () => {
        try {
            const { data } = await AxiosInstace.get<BookSearchResponse>(`/search.json?title=${bookTitle}`);
            setBooksResponse({
                books:  data.docs.map((book : Doc) => ({
                    id: book.key,
                    title: book.title,
                    author: book.author_name ? book.author_name.shift() : 'Unknown',
                    image: book.cover_i
                })),
                isLoading: false,
                error: false
            });
        } catch (error) {
            setBooksResponse({
                books: [],
                isLoading: false,
                error: true
            });
        }
    }

    useEffect(() => {

        let mounted = true;

        if (!bookTitle || !mounted) {
            return;
        }

        setBooksResponse({
            books: [],
            isLoading: true,
            error: false
        });

    
        getBooksByTitle();

        return () => {
            mounted = false;
        }
        
    }, [bookTitle]);

    return bookResponse;
}