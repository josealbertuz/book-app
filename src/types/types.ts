export type StackParamList = {
    Home: undefined,
    Details: { bookId: string }
};

export type BookResponse = {
    books: [],
    isLoading: boolean,
    error: boolean
}