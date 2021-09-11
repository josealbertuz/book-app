import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { BookListItemProps } from '../types/types';


const BookListItem = ({ title, author, image }: BookListItemProps): JSX.Element => {
    return (
        <View style={styles.container}>
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
        </View>
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
