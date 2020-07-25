import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'

const Pesan = () => {
    return (
        <View style={styles.page}>
            <Text style={{ color: colors.dot, fontSize:16 }}>Belum ada pesan..</Text>
        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
