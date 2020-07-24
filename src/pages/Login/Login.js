import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Gap, Button } from '../../component'
import { colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Login" 
            onPress={()=>navigation.goBack()}/>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Gap height={50} />

                <Text style={styles.opening}>Masuk dan mulai terima layanan dari kami</Text>
                <Gap height={50} />
                <Input label="Email" />
                <Gap height={20} />
                <Input label="Password" />
                <Gap height={40} />

                <Button type="dark" title="Login" 
                onPress={()=>navigation.navigate('MainApp')}/>
                <Gap height={100} />

            </ScrollView>

        </View>
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
