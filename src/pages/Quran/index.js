import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import Axios from 'axios';
import { ListItem, colors } from 'react-native-elements';
import { fonts } from '../../utils'


export default class Quran extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasil: [],
            isLoading: true,
        }
    }

    async getAllSurat() {
        try {
            const response = await Axios.get('https://al-quran-8d642.firebaseio.com/data.json');
            this.setState({
                hasil: response.data,
                isLoading: false
            })
            console.log(this.state);
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getAllSurat();
        console.log(this.props.navigation);
    }

    render() {
        return (
            <ScrollView style={styles.page}>
                <SkeletonContent
                    containerStyle={{ flex: 1, paddingHorizontal: 10 }}
                    isLoading={this.state.isLoading}
                    layout={[
                        { key: "Id1", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id2", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id3", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id4", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id5", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id6", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id7", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id8", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id9", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id10", width: '100%', height: 60, marginVertical: 5, },
                        { key: "Id11", width: '100%', height: 60, marginVertical: 5, },

                    ]}
                >
                    {
                        this.state.hasil.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.nomor+'. ' + item.nama }
                                titleStyle={styles.nama}


                                //leftElement={item.nomor}
                                //leftElementStyle={styles.nomor}

                                rightSubtitle={item.asma}
                                rightSubtitleStyle={styles.textArab}

                                subtitle={item.arti + ' (' + item.ayat + ')'}
                                subtitleStyle={styles.subtitle}


                                bottomDivider
                                onPress={() => this.props.navigation.navigate('Surat', {
                                    noSurat: item.nomor,
                                    namaSurat: item.nama
                                })}
                            />
                        ))
                    }
                </SkeletonContent>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff'
    },
    nama: {
        fontSize: 17,
        color: 'green',
        fontFamily: fonts.bold
    },

    textArab: {
        fontSize: 35,
        fontFamily: fonts.arab,
        color: colors.green
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.regular, 
    }
})
