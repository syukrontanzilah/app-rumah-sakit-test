import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../utils'
import { ILWaiting } from '../../asset'

const Pesan = () => {
    return (
        <View style={styles.page}>
            <Image source={ILWaiting} style={{
                height: 150,
                width: 150,
                marginBottom: 10,
                opacity: 0.3
            }} />
            <Text style={{ color: colors.dot, fontSize: 16 }}>Belum ada pesan..</Text>
        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {

    }
})
