import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../utils/fonts'

const JadwalSholat = () => {
    return (
        <View style={styles.page}>
            <Text style={{fontFamily: fonts.arab, fontSize:30}}>jadwal sholat</Text>
        </View>
    )
}

export default JadwalSholat

const styles = StyleSheet.create({
    page: {
        flex:1,
        
    }
})
