import React from 'react'
import { View, FlatList, ListRenderItemInfo } from 'react-native'
import BookListItem from './BookListItem'
import { BookListProps, BooksFound } from '../types/types';

const BookList = ({books} : BookListProps): JSX.Element => {

    const renderItem = ({item} : ListRenderItemInfo<BooksFound>) => 
        <BookListItem
            key={item.key}
            id={item.key}
            title={item.title}
            author={item.author_name?.at(0) ?? 'Unknown'}
            image={item.cover_i}
        />

    return (
        <>
            <FlatList
                ItemSeparatorComponent={() => <View style={{ height: 30 }}></View>}
                data={books}
                renderItem={renderItem}
            />
        </>
    )
}

export default BookList
