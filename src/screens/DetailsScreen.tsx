import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/types';

type Props = NativeStackScreenProps<StackParamList, 'Details'>

const DetailsScreen = ({navigation} : Props) => {
    return (
        <View style={styles.container}>
            <Text>Details page</Text>
            <Button 
              title="Go back to Home Screen"
              onPress={() => navigation.navigate('Home')}
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

export default DetailsScreen
