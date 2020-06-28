import Axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, } from 'react-native-elements';
import { DummyBanner, IconLokasi, IconArtikel, IconShubuh } from '../../asset';
import { fonts, colors } from '../../utils';


const ListJadwal = ({ title, time, }) => {

    return (
        <View style={styles.wrapperJadwal}>
            <Text style={styles.compJadwal}>{title}</Text>
            <Text style={styles.compJadwal}>{time}  WIB</Text>
        </View>
    )
}

export default class JadwalSholat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            namasurat: '',
            quranAr: '',
            quranId: '',
            jadwal: [],
            isLoading: true,
        }
    }


    async getQuranAcak() {
        try {
            const response = await Axios.get('https://api.banghasan.com/quran/format/json/acak');
            this.setState({
                namasurat: response.data.surat.nama,
                quranAr: response.data.acak.ar,
                quranId: response.data.acak.id
            })
        } catch (error) { }
    }


    async getJadwalSholat() {
        try {
            const tanggalSkarang = moment().format();
            const tanggal = tanggalSkarang.substr(0, 10);
            const response = await Axios.get('https://api.banghasan.com/sholat/format/json/jadwal/kota/683/tanggal/' + tanggal);
            this.setState({
                jadwal: response.data.jadwal.data,
                isLoading: false
            })
        } catch (error) {

        }
    }

    componentDidMount() {
        this.getQuranAcak()
        this.getJadwalSholat()
    }

    render() {
        return (
            <View style={styles.page}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}>

                    {/* banner waktu sholat */}
                    <View>
                        <Image style={styles.image}
                            source={DummyBanner} />

                        <View style={{ position: 'absolute', top: 20, alignSelf: 'center' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    fontSize: 18,
                                    fontFamily: fonts.bold,
                                    color: 'green'
                                }}>Maghrib</Text>
                                <Text style={{
                                    alignSelf: 'center',
                                    fontSize: 40,
                                    fontFamily: fonts.bold,
                                    color: 'green'
                                }}>{this.state.jadwal.maghrib}</Text>
                                {/* <Text>{this.state.jadwal.tanggal}</Text> */}
                            </View>
                        </View>
                        <View style={{ position: 'absolute', bottom: 5, flexDirection: 'row', left: 15 }}>
                            <IconLokasi />
                            <Text style={styles.location}>Sukabumi, Jawa Barat</Text>

                        </View>
                    </View>



                    {/* card jadwal sholat */}
                    <Card
                        title={`Jadwal Sholat  ${this.state.jadwal.tanggal}`}
                        containerStyle={styles.Card}
                    >


                        <ListJadwal
                            title='Imsak'
                            time={this.state.jadwal.imsak}
                        />

                        <ListJadwal title='Shubuh' time={this.state.jadwal.subuh} />
                        <ListJadwal title='Dhuhur' time={this.state.jadwal.dzuhur} />
                        <ListJadwal title='Ashar' time={this.state.jadwal.ashar} />
                        <ListJadwal title='Maghrib' time={this.state.jadwal.maghrib} />
                        <ListJadwal title='Isya' time={this.state.jadwal.isya} />


                    </Card>

                    <View>
                        <Card
                            containerStyle={styles.Card}
                        >
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: 18, width: 18 }}>
                                        <IconArtikel />
                                    </View>

                                    <Text style={{
                                        fontFamily: fonts.bold,
                                        fontSize: 18,
                                        marginBottom: 10,
                                        color: colors.green
                                    }}> Ayat hari ini</Text>
                                </View>


                                <Text style={{
                                    fontFamily: fonts.bold,
                                    color: 'green',
                                    fontSize: 15,
                                }}>Surat {this.state.namasurat} : {this.state.quranAr.ayat}</Text>
                                <Text style={{
                                    fontSize: 25,
                                    color: colors.green,
                                    fontFamily: fonts.arab,
                                    paddingVertical: 10
                                }}>{this.state.quranAr.teks}</Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: colors.green,
                                    fontFamily: fonts.regular,
                                }} >{this.state.quranId.teks}</Text>
                            </View>

                        </Card>
                    </View>
                    <View style={{ height: 50 }} />
                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        flex: 1
    },
    image: {
        height: 200,
        width: '100%'
    },
    location: {
        bottom: 0,
        left: 3,
        fontSize: 16,
        fontFamily: fonts.bold,
        color: 'white'
    },
    Card: {
        elevation: 3,
        borderWidth: 0,
        borderRadius: 15,
    },

    wrapperJadwal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal:5
    },
    compJadwal: {
        fontFamily: fonts.bold,
        fontSize: 15,
    }
})
