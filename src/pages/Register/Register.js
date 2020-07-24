import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, Loading } from '../../component'
import { colors, useForm } from '../../utils'
import Fire from '../../config/Fire'

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
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message
                setLoading(false)
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
        paddingHorizontal: 30,
        marginTop: 30
    }
})
