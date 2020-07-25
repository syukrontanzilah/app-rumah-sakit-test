import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { showMessage } from "react-native-flash-message"
import { Button, Gap, Header, Input, Loading } from '../../component'
import Fire from '../../config/Fire'
import { colors, useForm } from '../../utils'

const Register = ({ navigation }) => {
    // const [fullName, setFullName] = useState('');
    // const [profesi, setProfesi] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useForm({
        fullName: '',
        profesi: '',
        email: '',
        password: '',
    })

    const onContinue = () => {
        setLoading(true)
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
                setForm('reset')
                const data = {
                    fullName: form.fullName,
                    profesi: form.profesi,
                    email: form.email,
                    uid:success.user.uid
                }
                Fire.database()
                    .ref('users/' + success.user.uid + '/')
                    .set(data)
                    navigation.replace('MainApp')
            })
            .catch((error) => {
                const errorMessage = error.message
                setLoading(false)
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            });
    }

    return (
        <>
            <View style={styles.page}>
                <Header
                    onPress={() => navigation.goBack()}
                    title="Registrasi" />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scroll}>
                    <View style={styles.content}>
                        <Input label="Nama Lengkap"
                            value={form.fullName}
                            onChangeText={(value) => setForm('fullName', value)}
                        />
                        <Gap height={20} />

                        <Input label="Pekerjaan"
                            value={form.profesi}
                            onChangeText={(value) => setForm('profesi', value)}
                        />
                        <Gap height={20} />

                        <Input label="Email"
                            value={form.email}
                            onChangeText={(value) => setForm('email', value)}
                        />
                        <Gap height={20} />

                        <Input label="Password"
                            value={form.password}
                            onChangeText={(value) => setForm('password', value)}
                            secureTextEntry />
                        <Gap height={40} />

                        <Button
                            onPress={onContinue}
                            type="dark" title="Lanjutkan" />
                        <Gap height={20} />

                    </View>
                </ScrollView>
            </View>

            {loading && <Loading />}

        </>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    scroll: {
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        marginTop: 30
    }
})
