import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'
import { IconMatahari } from '../../asset'
import Fire from '../../config/Fire'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            Fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.replace('MainApp')
                } else {
                    navigation.replace('GetStarted')
                }
            })
        }, 3000);
    }, [])
    return (
        <View style={styles.page}>
            <IconMatahari style={styles.logo} />
            <View style={styles.wrapRS}>
                <Text style={styles.rs}>Rumah Sakit</Text>
                <Text style={styles.sukabumi}>Sukabumi</Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    wrapRS: {
        alignItems: 'center'
    },
    rs: {
        color: colors.blue1,
        fontSize: 20
    },
    sukabumi: {
        color: colors.blue1,
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: -5
    },
})
