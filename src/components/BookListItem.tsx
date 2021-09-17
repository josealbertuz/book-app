import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { BookListItemProps, StackParamList } from '../types/types';
import { getBookById } from '../slices/bookSlice';


const BookListItem = ({ id, title, author, image, navigation }: BookListItemProps): JSX.Element => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(getBookById(id));
                navigation.navigate('Details', {bookId: id, image})
            }} 
            style={styles.container}>
            <Image
                
                source={{
                    uri: image ? `http://covers.openlibrary.org/b/id/${image}.jpg` :
                        'https://via.placeholder.com/150'
                }}
                style={styles.image}
            />
            <View style={styles.bookInfoContainer}>
                <Text style={styles.textStyle}>{title}</Text>
                <Text style={styles.textStyle}>By {author}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 60,
        height: 90,
        resizeMode: 'cover'
    },
    bookInfoContainer: {
        paddingHorizontal: 20,
        justifyContent: 'space-evenly'
    }
})

export default BookListItem
