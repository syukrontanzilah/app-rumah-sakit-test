import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Gap, Input, Button, Loading } from '../../component'
import { colors, useForm } from '../../utils'
import Fire from '../../config/Fire'
import { showMessage } from 'react-native-flash-message'

const Pendaftaran = ({ navigation }) => {
    const [form, setForm] = useForm({
        pasien: "",
        gender: "",
        date: "",
        problem: ""
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
     
    }

    return (
        <>
            <View style={styles.page}>
                <Header title="Pendaftaran"
                    onPress={() => navigation.goBack()} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.content}>
                    <Gap height={20} />
                    <Text style={styles.desc}>Silahkan isi Formulir berikut untuk melakukan pendaftaran pemeriksaan pasien. Setalah anda mendaftarkan diri, Anda akan mendapat Nomor Pasien yang dapat digunakan untuk melakukan pemeriksaan oleh Dokter.</Text>

                    <Gap height={40} />
                    <Input label="Nama Pasien"
                        value={form.pasien}
                        onChangeText={(value) => setForm('pasien', value)}
                    />
                    <Gap height={20} />

                    <Input label="Jenis Kelamin"
                        value={form.gender}
                        onChangeText={(value) => setForm('gender', value)}
                    />
                    <Gap height={20} />

             

                    <Input label="Pilih Tanggal"
                        placeholder="DD/MM/YYYY"
                        value={form.date}
                        onChangeText={(value) => setForm('date', value)}
                    />
                    <Gap height={20} />

                    <Input label="Keluhan Penyakit"
                        value={form.problem}
                        onChangeText={(value) => setForm('problem', value)}
                    />
                    <Gap height={40} />

                    <Button
                        onPress={()=> navigation.navigate('NoPasien')}
                        title="Submit" />

                    <Gap height={40} />
                </ScrollView>

            </View>
            {
                loading && <Loading />
            }
        </>
    )
}

export default Pendaftaran

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        paddingHorizontal: 30
    },
    desc: {
        fontSize: 16,
        color: colors.black2
    }
})
