import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import { IconCoffee, IconCar, IconHoby } from '../../../asset'

const Menu = ({ title, onPress }) => {
    const Icon = () => {
        if (title === "Resep") {
            return <IconCoffee />
        }
        if (title === "Pendaftaran") {
            return <IconCar />
        }
        if (title === "Layanan") {
            return <IconHoby />
        }
        return <IconCoffee />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <View style={styles.wrapIcon}>
                <Icon />
            </View>
            <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        height: 60, width: '70%',
        backgroundColor: colors.border,
        borderRadius: 40,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: colors.blue1,
        borderWidth: 0.5
    },
    wrapIcon: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center', 
        marginRight:5
    },
    Text: {
        color: colors.black2,
        fontSize: 18
    }
})
