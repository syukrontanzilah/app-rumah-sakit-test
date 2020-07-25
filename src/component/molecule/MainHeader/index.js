import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconLogout } from '../../../asset'
import { colors } from '../../../utils'

const MainHeader = ({ title, onPress }) => {
    return (
        <View style={styles.header}>
            <View style={styles.titleWrap}>
                <Text style={styles.judul}>{title}</Text>
            </View>

            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <IconLogout />
                <Text style={styles.text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.blue1,
        paddingVertical:10,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center'

    },
    titleWrap: {
        flex: 1
    },
    judul: {
        color: colors.white,
        fontSize: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 10
    }
})
