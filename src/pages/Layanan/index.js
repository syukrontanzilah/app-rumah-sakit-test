import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../component'
import NotFound from '../NotFound'

const Layanan = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Layanan" onPress={() => navigation.goBack()} />
            <NotFound />
        </View>
    )
}

export default Layanan

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
