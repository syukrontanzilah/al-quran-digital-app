import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconJadwal } from '../../asset'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 3000);
    }, [navigation])
    return (
        <View style={styles.page}>
            <View style={{ height: 100, width: 100 }}>
                <IconJadwal />
            </View>

            <Text style={styles.text}>Quran Ku</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: 'green'
    }
})
