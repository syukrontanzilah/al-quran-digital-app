import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Axios from 'axios'
import { fonts, colors } from '../../utils'


export default class Surat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noSurat: this.props.route.params.noSurat,
            ayat: [],
            isLoading: true,
        }
    }

    async getSuratByNumber() {
        try {
            const response = await Axios.get('https://al-quran-8d642.firebaseio.com/surat/' + this.state.noSurat + '.json')
            this.setState({
                ayat: response.data,
                isLoading: false
            });
        } catch (error) {
        }
    }

    componentDidMount() {
        this.getSuratByNumber();
        this.props.navigation.setOptions({
            title: this.props.route.params.namaSurat
        })
    }


    render() {
        return (
            <ScrollView
           showsVerticalScrollIndicator={false}
                style={styles.page}

            >
                {
                    this.state.isLoading ?
                        <View style={styles.loading}>
                            <Text style={styles.loadingText}>Loading...</Text>
                        </View>
                        :
                        this.state.ayat.map((item, i) => (
                            <View
                                style={styles.content}
                                key={i}>


                                <View style={styles.arabWrap}>
                                    <Text style={styles.textArab}>{item.ar}</Text>
                                </View>


                                <View style={styles.wrapArti}>
                                    <Text style={styles.textArti}>{item.nomor + '. ' + item.id}</Text>

                                </View>


                            </View>
                        ))
                }


            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#1a1a00',

    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100

    },
    loadingText: {
        fontFamily: fonts.arab,
        fontSize: 16,
        color: colors.inactiveText
    },
    content: {
        paddingHorizontal: 20, 
       // borderBottomColor: '#e9e9e9',
        //borderBottomWidth:1, 
        paddingBottom:20
    },
    arabWrap: {
        marginBottom: 10, 
        marginTop: 25
    },
    textArab: {
        fontSize: 36,
        fontFamily: fonts.arab,
        color: 'wheat',
        opacity: 0.6
    },
    wrapArti: {

    },
    textArti: {
        fontSize: 15,
        fontFamily: fonts.regular, 
        color: 'wheat',
        opacity: 0.3
    }

})
