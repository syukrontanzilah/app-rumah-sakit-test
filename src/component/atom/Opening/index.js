import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

const Opening = () => {
    return (
        <View style={styles.wrap}>
            <Text style={styles.text1}>Selamat datang di Aplikasi <Text style={{color: colors.blue1}}>Rumah Sakit Sukabumi</Text>. Kami berkomitment memberikan pelayanan yang terbaik..</Text>
            <Text style={styles.text1}></Text>

        </View>
    )
}

export default Opening

const styles = StyleSheet.create({
    wrap: {
        maxWidth: '80%',
        marginHorizontal:16
    },
    text1: {
        fontSize: 18,
        color: colors.black1
    }
})
