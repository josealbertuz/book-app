import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BookList from '../components/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getBooksByTitle } from '../slices/booksFinderSlice';

const HomeScreen = (): JSX.Element => {

    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state: RootState) => state.booksFound);

    console.log(data);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{ height: 150, justifyContent: 'space-around' }}>
                <Text style={styles.title}>Book app</Text>
                <View style={{ backgroundColor: 'white' }}>
                    <TextInput
                        placeholder="Type the name of a book"
                        style={styles.input}
                        onSubmitEditing={({ nativeEvent: { text } }) => dispatch(getBooksByTitle(text))}
                    />
                </View>
                <Text style={styles.subtitle}>Books searched</Text>
            </View>
            {
                isLoading && data === undefined ?
                    <ActivityIndicator /> :
                    <BookList books={data ?? []} />

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
