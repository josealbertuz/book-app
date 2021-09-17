import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BookDetails from '../components/BookDetails';
import { DetailsScreenNavigationProps } from '../types/types';
import { RootState } from '../store/store';

const DetailsScreen = ({ navigation, route }: DetailsScreenNavigationProps) => {

  const {data, isLoading, error} = useSelector((state: RootState) => state.book);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}>
        <Header
          backgroundColor="#282a36"
          leftComponent={<Icon size={32} name="arrow-back" color="white" onPress={
            () => navigation.navigate('Home')
          } />}
        />
      </View>
      {
        isLoading ? <ActivityIndicator /> : 
          data === undefined || error ? <Text>An error has ocurred</Text> : 
          <BookDetails book={data} image={route.params.image}/>
      }
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  }
});

export default DetailsScreen
