import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../component'
import Fire from '../../config/Fire'
import { colors } from '../../utils'

const ListDokter = ({ navigation, route }) => {
    const [dataDokter, setDataDokter] = useState([]);
    const itemCategory = route.params
    useEffect(() => {
        callDoctorByCategory(itemCategory.category)
    }, [])

    callDoctorByCategory = (category) => {
        Fire.database()
            .ref('doctors/').orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                //parsing data
                if (res.val()) {
                    const oldData = res.val();
                    const data = []
                    Object.keys(oldData).map(item => {
                        data.push({
                            id: item,
                            data: oldData[item]
                        })
                    })
                    setDataDokter(data)
                }
            })
    }

    return (
        <View style={styles.page}>
            <Header title="List Dokter"
                onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                {
                    dataDokter.map(dokter => {
                        return <List
                            key={dokter.id}
                            profile={{uri: dokter.data.photo}}
                            name={dokter.data.fullName}
                            category={dokter.data.category}
                            str={dokter.data.str}
                        />
                    })
                }
            </View>
        </View>
    )
}

export default ListDokter

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 16
    }
})
