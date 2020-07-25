import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../component'

const Resep = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Resep"
            onPress={()=> navigation.goBack()}/>
            <Text>Resep</Text>
        </View>
    )
}

export default Resep

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
