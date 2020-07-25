import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotFound } from '../../pages';
import { colors } from '../../utils';

const Info = () => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapJudul}>
                <Text style={styles.title}>News & Informasi</Text>
            </View>
            <NotFound />
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    wrapJudul: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 18,
        color: colors.black2
    }
})
