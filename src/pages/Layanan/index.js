import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../component'

const Layanan = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Layanan" onPress = {()=> navigation.goBack()}/>
            <Text>layanan</Text>
        </View>
    )
}

export default Layanan

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
