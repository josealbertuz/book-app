import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { BookDetailsProps } from '../types/types';

const BookDetails = ({ book, image }: BookDetailsProps): JSX.Element => {

    return (
        <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{ height: '100%', padding: 15 }}
        >
            <View style={[styles.imageContainer, styles.marginTop]}>
                <Image
                    style={styles.image}
                    source={{
                        uri: book.covers ? `http://covers.openlibrary.org/b/id/${image}.jpg` :
                            'https://via.placeholder.com/150'
                    }} />
            </View>
            <Text style={[styles.title, styles.marginTop]}>{book.title}</Text>
            <Text style={styles.marginTop}>{book.description?.value ?? 'No description'}</Text>
            <Button 
                style={styles.marginTop} 
                title="Borrow"
                buttonStyle={{backgroundColor: '#33439E', borderRadius: 8}}
            />
            <Button 
                style={[styles.marginTop]}
                titleStyle={{color: '#000'}} 
                type="outline" 
                title="Want to Read"
                buttonStyle={{borderColor: '#33439E', borderRadius: 8}}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },
    marginTop: {
        marginTop: 15
    },
    imageContainer: { 
        paddingHorizontal: 25, 
        marginBottom: 15, 
        alignItems: 'center' 
    },
    image: {
        width: 280, 
        height: 400
    }
});

export default BookDetails
