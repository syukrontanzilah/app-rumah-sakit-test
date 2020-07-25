import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListNews } from '../../component';
import { colors } from '../../utils';
import Fire from '../../config/Fire'

const Info = ({ navigation }) => {
    const [news, setNews] = useState([])
    useEffect(() => {
        Fire.database()
            .ref('news')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setNews(res.val())
                }
            }).catch(err => { })
    }, [])
    return (
        <View style={styles.page}>
            <ScrollView>
                <View style={styles.wrapJudul}>
                    <Text style={styles.title}>News & Informasi</Text>
                </View>

                <View style={styles.content}>
                    {
                        news.map(item => {
                            return <ListNews
                                key={item.id}
                                title={item.title}
                                date={item.date}
                                photo={{uri:item.photo}}
                            />
                        })
                    }






                </View>
            </ScrollView>
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
    },
    content: {
        paddingHorizontal: 16
    }

})
