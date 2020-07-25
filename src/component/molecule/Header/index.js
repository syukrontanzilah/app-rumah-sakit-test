import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBack } from '../../../asset'
import { colors } from '../../../utils'
import { Gap } from '../../atom'

const index = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={onPress}>
                <IconBack />
            </TouchableOpacity>
            <View style={styles.wrapText}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Gap width={20} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor:colors.white
    },
    icon: {
        marginLeft: 10
    },
    wrapText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: colors.black1,
        fontWeight:'bold'
    }
})
