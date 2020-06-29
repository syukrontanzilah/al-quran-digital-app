import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Fire from '../../config/Fire';
import { fonts, colors } from '../../utils'

const Artikel = ({ navigation }) => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        Fire.database()
            .ref('article_islam')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setArticle(res.val())
                }
            }).catch(err => { })

    }, [])
    return (
        <View style={styles.page}>
            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}>

                <Text style={styles.judul}>Artikel Islam</Text>
                {
                    article.map(item => {
                        return (
                            <TouchableOpacity
                                style={styles.content}
                                key={item.id}
                                onPress={() => navigation.navigate('ArtikelItem', item)}
                            >


                                <Image style={{ height: 60, width: 60, borderRadius: 10, marginRight: 10 }} source={{ uri: item.image }} />
                                <View style={{ flex: 1, paddingRight: 10 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.desc}>{item.date}</Text>
                                </View>

                            </TouchableOpacity>


                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Artikel

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,

    },
    scroll: {
        flex: 1
    },
    judul: {
        fontFamily: fonts.bold,
        fontSize: 20,
        color: colors.green,
        paddingTop: 15,
        paddingBottom: 15
    },
    content: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5,

    },
    title: {
        fontSize: 17,
        fontFamily: fonts.bold,
        color: colors.green
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: 'gray'
    }
})
