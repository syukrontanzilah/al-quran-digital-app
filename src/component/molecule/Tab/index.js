import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconJadwal, IconQuran, IconArtikel } from '../../../asset'
import {fonts, colors} from '../../../utils'

const Tab = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'JadwalSholat') {
            return active ? <IconJadwal /> :
                <View style={styles.iconInactive}>
                    <IconJadwal />
                </View>
        }
        if (title === 'Quran') {
            return active ? <IconQuran /> :
                <View style={styles.iconInactive}>
                    <IconQuran />
                </View>
        }
        if (title === 'Artikel') {
            return active ? <IconArtikel /> :
                <View style={styles.iconInactive}>
                    <IconArtikel />
                </View>
        }
        return active ? <IconJadwal /> : <View style={styles.iconInactive}>
            <IconJadwal />
        </View>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <View style={styles.icon}>
                <Icon />
            </View>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tab

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    icon: {
        height: 25,
        width: 25
    },
    iconInactive: {
        height: 25,
        width: 25,
        opacity: 0.5

    },
    text: (active) => ({
        color: active ? colors.activeText : colors.inactiveText,
        fontSize: 11,
        textAlign: 'center',
        paddingTop: 2,
        fontFamily: fonts.regular
        
    })
})
