import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Gap, Button, Loading } from '../../component'
import { colors, useForm } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler';
import Fire from '../../config/Fire'
import { showMessage } from 'react-native-flash-message';

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                setLoading(false)
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDB => {
                        navigation.replace('MainApp')
                    })
            }).catch(err => {
                setLoading(false)
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            })
    }

    return (
        <>
            <View style={styles.page}>
                <Header title="Login"
                    onPress={() => navigation.goBack()} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.content}>
                    <Gap height={50} />

                    <Text style={styles.opening}>Masuk dan mulai terima layanan dari kami</Text>
                    <Gap height={50} />
                    <Input label="Email"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={20} />
                    <Input label="Password"
                        secureTextEntry
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                    />
                    <Gap height={40} />

                    <Button type="dark" title="Login"
                        onPress={handleLogin} />
                    <Gap height={100} />

                </ScrollView>

            </View>
            {loading && <Loading />}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    opening: {
        fontSize: 18,
        color: colors.black1,
        maxWidth: '60%',
    },
    content: {
        marginHorizontal: 40
    }
})
