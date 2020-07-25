import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../utils'
import { ILTC } from '../../asset'

const NotFound = () => {
    return (
        <View style={styles.page}>
            <Image source={ILTC} style={styles.image} />
            <Text style={styles.text}>ops.. halaman belum tersedia</Text>
        </View>
    )
}

export default NotFound

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.3
    },
    image: {
        height: 200, width: 200, marginBottom: 20
    },
    text: {
        color: colors.black2,
        fontSize: 16
    }
})
