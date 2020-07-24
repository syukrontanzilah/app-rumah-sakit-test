import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap } from '../../component'
import { colors } from '../../utils'

const Register = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                onPress={() => navigation.goBack()}
                title="Registrasi" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>
                <View style={styles.content}>
                    <Input label="Nama" />
                    <Gap height={20} />

                    <Input label="Pekerjaan" />
                    <Gap height={20} />

                    <Input label="Email" />
                    <Gap height={20} />

                    <Input label="Password" />
                    <Gap height={40} />

                    <Button
                    onPress={()=> navigation.navigate('MainApp')}
                    type="dark" title="Lanjutkan" />
                    <Gap height={20} />

                </View>
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor:colors.white
    },
    scroll: {
        flex: 1
    },
    content: {
        paddingHorizontal: 30,
        marginTop: 30
    }
})
