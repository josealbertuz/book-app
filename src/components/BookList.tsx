import React from 'react'
import { View, Text, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native'
import BookListItem from './BookListItem'
import { BookListProps, BookListItemProps } from '../types/types';

const BookList = ({ books }: BookListProps): JSX.Element => {

    const renderItem = ({item} : ListRenderItemInfo<BookListItemProps>) =>
        <BookListItem
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            image={item.image}
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
