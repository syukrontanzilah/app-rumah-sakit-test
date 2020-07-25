import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from '../../component'
import NotFound from '../NotFound'

const Resep = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Resep"
            onPress={()=> navigation.goBack()}/>
            <NotFound/>
        </View>
    )
}

export default Resep

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
