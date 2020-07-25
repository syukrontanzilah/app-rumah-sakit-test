import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../component'
import { colors } from '../../utils'

const NoPasien = () => {
    return (
        <View style={styles.page}>
            <Header title="Nomor Antrian Anda" />

            <View style={styles.content}>
                <Text style={styles.text}>Screen Shoot Nomor Antrian/ Nomor Pasien ini, atau perlihatkan halaman ini kepada petugas kami</Text>

                <View style={styles.card}>
                <Text style={styles.name}>Rumah Sakit Sukabumi</Text>
                    <Text>Nomor Pasien:</Text>
                    <Text style={styles.angka}>57</Text>
                    <Text style={styles.name}>Andika Sugianto</Text>
                    <Text>Hari/Tanggal</Text>
                    <Text>Senin, 27/Agustus/2020</Text>

                </View>
            </View>

        </View>
    )
}

export default NoPasien

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        paddingHorizontal: 20,
        marginTop:20
    },
    text: {
        fontSize: 16,
        color: colors.black2,
        marginBottom:20
    },
    card: {
        paddingVertical:30,
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.dot,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth:1,
        borderColor: colors.black2
    },
    angka:{
        fontSize:60,
        fontWeight:'bold',
        color:colors.black1
    },
    name:{
        fontSize:20
    }
})
