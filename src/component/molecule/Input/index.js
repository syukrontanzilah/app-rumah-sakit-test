import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.blue1)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
                secureTextEntry ={secureTextEntry}
                placeholder={placeholder}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: colors.black2,
        marginBottom: 6
    },
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        fontSize: 18,
        borderRadius: 10,
        color: colors.black1,
        padding: 12
    })
})
