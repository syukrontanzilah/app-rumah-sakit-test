import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'

const List = ({name, category, str, profile}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrap}>
                <Image
                    source={profile}
                    style={styles.image} />
            </View>
            <View>
                <Text style={styles.name}>dr. {name}</Text>
                <Text style={styles.desc}>{category}</Text>
                <Text style={styles.desc}>Str Number: {str} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    imageWrap: {
        height: 65,
        width: 65,
        backgroundColor: 'wheat',
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 60, 
        width: 60, 
        backgroundColor: 'wheat',
        borderRadius: 10
    },
    name: {
        fontSize: 18,
        color: colors.black1
    },
    desc: {
        color: colors.opacity,
        fontSize: 14
    }
})
