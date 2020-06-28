import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconJadwal } from '../../asset';
import { fonts } from '../../utils'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 3000);
    }, [navigation])
    return (
        <View style={styles.page}>
            <View style={styles.wrapper}>
                <Image style={{ height: 120, width: 120, borderRadius: 120 / 2 }}
                    source={require('../../asset/ilustration/attanzil2.jpg')} />
                <Text style={styles.text}>At-Tanzil</Text>
            </View>


        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.9
    },
    text: {
        marginTop:5,
        fontSize: 25,
        color: '#00004d',
        fontFamily: fonts.bold

    }
})
