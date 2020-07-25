import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { colors } from '../../utils'
import { IconLogout } from '../../asset'
import { Header, MainHeader, Opening, Gap, KategoriDokter } from '../../component'
import Fire from '../../config/Fire'
import { showMessage } from 'react-native-flash-message'

const Home = ({ route, navigation }) => {
    // const {fullName, profesi, email, uid,} = route.params
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

    return (
        <View style={styles.page}>
            <MainHeader title="Rumah Sakit Sukabumi" />

            {/* <Text>{fullName}</Text>
            <Text>{profesi}</Text>
            <Text>{email}</Text> */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Gap height={15} />
                <Opening />

                {/* <View>
                    <Text>Dokter-Dokter Kami</Text>
                </View> */}
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




                        <Gap width={35} />
                    </ScrollView>


                </View>


            </ScrollView>



        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content: {
    },
    wrapKatagoriDokter: {
        flexDirection: 'row',

    },
    scrollHorizontal: {
        paddingHorizontal: 16
    }

})
