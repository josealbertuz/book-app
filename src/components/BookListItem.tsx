import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BookListItemProps, HomeScreenNavigationProps, StackParamList } from '../types/types';


const BookListItem = ({ id, title, author, image }: BookListItemProps): JSX.Element => {

    const navigation = useNavigation<NavigationProp<StackParamList>>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', {bookId: id})} 
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
