import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Gap, Input, Button } from '../../component'
import { colors } from '../../utils'

const Pendaftaran = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Pendaftaran"
                onPress={() => navigation.goBack()} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Gap height={20} />
                <Text style={styles.desc}>Silahkan isi Formulir berikut untuk melakukan pendaftaran pemeriksaan pasien. Setalah anda mendaftarkan diri, Anda akan mendapat Nomor Pasien yang dapat digunakan untuk melakukan pemeriksaan oleh Dokter.</Text>

                <Gap height={40} />
                <Input label="Nama Pasien" />
                <Gap height={20} />

                <Input label="Jenis Kelamin" />
                <Gap height={20} />

                <Input label="Kontak yang bisa dihubungi" />
                <Gap height={20} />

                <Input label="Pilih Specialist" />
                <Gap height={20} />

                <Input label="Pilih Hari" />
                <Gap height={20} />

                <Input label="Keluhan Penyakit" />
                <Gap height={40} />


                <Button 
                onPress ={()=> navigation.navigate('NoPasien')}
                title="Submit" />

                <Gap height={40} />
            </ScrollView>

        </View>
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
