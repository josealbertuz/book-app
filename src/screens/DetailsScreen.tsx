import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Button, Header, Icon, Rating } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DetailsScreenNavigationProps } from '../types/types';

const DetailsScreen = ({ navigation, route }: DetailsScreenNavigationProps) => {
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
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ height: '100%', padding: 15 }}
      >
        <View style={{ width: '100%', height: '55%', paddingHorizontal: 25, marginBottom: 15 }}>
          <Image
            style={{
              width: '100%',
              height: '100%'
            }}
            source={{
              uri: 'https://via.placeholder.com/150'
            }} />
        </View>
        <Text style={styles.title}>Call Me By Your Name</Text>
        <Text style={styles.subtitle}>By Andre Aciman</Text>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Rating imageSize={30} />
          <Text style={styles.title}>3.5</Text>
        </View>
        <Text>
          It's the summer of 1983, and precocious 17-year-old Elio Perlman is spending the days with his family at their 17th-century villa in Lombardy, Italy. He soon meets Oliver, a handsome doctoral student who's working as an intern for Elio's father. Amid the sun-drenched splendor of their surroundings, Elio and Oliver discover the heady beauty of awakening desire over the course of a summer that will alter their lives forever.
        </Text>
      </ScrollView>
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
