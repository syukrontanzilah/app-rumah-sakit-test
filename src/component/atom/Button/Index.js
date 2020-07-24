import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

const Index = ({title, type, onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.wrap(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Index

const styles = StyleSheet.create({
    wrap: (type)=> ({
        backgroundColor: type === 'dark' ? colors.blue1 : colors.white,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        borderColor: colors.blue1,
        borderWidth:0.5
    }),
    text: (type)=>({
        color: type ==='dark'? colors.white : colors.black1,
        fontSize:18,
        
        
    })
})
