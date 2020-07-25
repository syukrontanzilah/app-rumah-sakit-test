import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconMatahari, IconFlower, IconBug, IconWanita } from '../../../asset'
import { colors } from '../../../utils'

const KategoriDokter = ({ category, onPress }) => {
    const Icon = () => {
        if (category === "Dokter Umum") {
            return <IconMatahari />
        }
        if(category === "Dokter Anak"){
            return <IconFlower/>
        }
        if(category === "Dokter Gigi"){
            return <IconBug/>
        }
        if(category === "Dokter Mata"){
            return <IconWanita/>
        }

        return <IconMatahari />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>

            <View style={{ height: 50, width: 50 }}>
                <Icon/>
            </View>

            <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
    )
}

export default KategoriDokter

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        backgroundColor: 'wheat',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        color: colors.black2
    }
})
