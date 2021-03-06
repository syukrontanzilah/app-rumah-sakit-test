import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { Gap, KategoriDokter, MainHeader, Menu, Opening } from '../../component'
import Fire from '../../config/Fire'
import { colors } from '../../utils'

const Home = ({ navigation, }) => {
    const [categoryDokter, setCategoryDokter] = useState([])
    useEffect(() => {
        getCategoryDokter()
    }, [navigation])

    const getCategoryDokter = () => {
        Fire.database()
            .ref('category_dokter')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null);
                    setCategoryDokter(filterData)
                }
            })
            .catch(err => {
                showMessage({
                    message: "Terjadi kesalahan",
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            })
    }

    const signOut = () => {
        Fire.auth().signOut()
            .then(res => {
                navigation.replace('GetStarted')
            }).catch(err => {
                showMessage({
                    message: "Terjadi kesalahan",
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            })
    }

    return (
        <View style={styles.page}>
            <MainHeader
                onPress={signOut}
                title="Rumah Sakit Sukabumi" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Gap height={15} />
                <Opening />

                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Dokter-Dokter Kami</Text>
                </View>
                <View style={styles.wrapKatagoriDokter}>
                    <ScrollView
                        style={styles.scrollHorizontal}
                        showsHorizontalScrollIndicator={false}
                        horizontal>
                        {
                            categoryDokter.map(item => {
                                return <KategoriDokter
                                    onPress={() => navigation.navigate('ListDokter', item)}
                                    key={item.id}
                                    category={item.category} />
                            })
                        }
                        <Gap width={25} />
                    </ScrollView>
                </View>

                <Gap height={25} />
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Features</Text>
                </View>
                <View style={styles.menu}>
                    <Menu
                        onPress={() => navigation.navigate('Pendaftaran')}
                        title="Pendaftaran" />
                    <Menu
                        onPress={() => navigation.navigate('Resep')}
                        title="Resep" />
                    <Menu
                        onPress={() => navigation.navigate('Layanan')}
                        title="Layanan" />
                </View>

            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor: colors.white
    },
    content: {
    },
    wrapKatagoriDokter: {
        flexDirection: 'row',

    },
    scrollHorizontal: {
        paddingHorizontal: 16
    },
    titleWrap: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        paddingTop: 0,
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomColor: colors.border,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        color: colors.black1,
        fontWeight: 'bold'
    },
    menu: {
        paddingHorizontal: 16
    }

})
