import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBookFinder } from '../hooks/useBookFinder';
import BookListItem from '../components/BookListItem';
import { HomeScreenProps } from '../types/types';
import BookList from '../components/BookList';


const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {

    const [value, setValue] = useState<string>('');

    const { books, isLoading, error } = useBookFinder(value);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{ height: 150, justifyContent: 'space-around' }}>
                <Text style={styles.title}>Book app</Text>
                <View style={{ backgroundColor: 'white' }}>
                    <TextInput
                        placeholder="Type the name of a book"
                        style={styles.input}
                        onSubmitEditing={({ nativeEvent: { text } }) => setValue(text)}
                    />
                </View>
                <Text style={styles.subtitle}>Books searched</Text>
            </View>
            {
                isLoading ? <Text style={styles.subtitle}>Loading...</Text> :
                    (
                        <BookList books={books} />
                    )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#282a36',
        padding: 20
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    input: {
        height: 35
    }
});

export default HomeScreen
