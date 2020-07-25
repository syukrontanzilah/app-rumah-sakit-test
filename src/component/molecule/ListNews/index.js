import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'

const ListNews = ({title, date, photo}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrap}>
                <Image
                    source={photo}
                    style={styles.image} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListNews

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    imageWrap: {
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10
    },
    image: {
        height: 60, 
        width: 100, 
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
