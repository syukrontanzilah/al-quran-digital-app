import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { fonts, colors } from '../../utils'

const ArtikelItem = ({ route }) => {
    const dataArtikel = route.params
    return (
        <ScrollView
            style={styles.page}
            showsVerticalScrollIndicator={false}>
            <Image style={styles.image} source={{ uri: dataArtikel.image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{dataArtikel.title}</Text>
                <Text style={styles.date}>{dataArtikel.date}</Text>
                <Text style={styles.body}>{dataArtikel.body}</Text>

            </View>

        </ScrollView>
    )
}

export default ArtikelItem

const styles = StyleSheet.create({
    page: {
        flex: 1, 
        backgroundColor: 'white'

    },
    image: {
        height: 200,
        width: '100%',

    },
    content: {
        paddingVertical: 16,
        paddingHorizontal: 16,

    },
    title: {
        fontSize:18,
        fontFamily: fonts.bold,
        color: colors.green,
    },
    date :{
        fontSize:14,
        fontFamily: fonts.regular,
        color: 'gray',  
    },
    body :{
        fontSize:16,
        fontFamily: fonts.regular,
        color: colors.green, 
        paddingTop:20,
        textAlign: 'justify'
    }
})
