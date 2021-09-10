import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { StackParamList } from '../types/types';

type Props = NativeStackScreenProps<StackParamList, 'Home'>

const HomeScreen = ({navigation} : Props) => {

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button
                title="Go to Details Screen"
                onPress={() => navigation.navigate('Details', { bookId: '12345'})} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen
