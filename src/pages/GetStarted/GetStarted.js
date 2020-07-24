import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILGetStarted } from '../../asset'
import { colors } from '../../utils'
import { Button, Gap } from '../../component'

const GetStarted = ({ navigation }) => {
    return (
        <ImageBackground
            source={ILGetStarted}
            style={styles.page}>
            <View style={styles.wrapRS}>
                <Text style={styles.rs}>Rumah Sakit</Text>
                <Text style={styles.sukabumi}>Sukabumi</Text>
                <Text style={styles.visi}>Melayani dengan sepenuh hati</Text>
            </View>

            <View style={styles.wrapButton}>
                <Button
                    onPress={() => navigation.navigate('Register')}
                    title="Register"
                    type="dark" />
                <Gap height={10} />
                <Button
                    onPress={() => navigation.navigate('Login')}
                    title='Login' />
            </View>




        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        flex: 1, justifyContent: 'space-around'
    },
    wrapRS: {
        alignItems: 'flex-end',
        paddingRight: '15%'
    },
    rs: {
        color: colors.blue1,
        fontSize: 25
    },
    sukabumi: {
        color: colors.blue1,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: -5
    },
    visi:{
        color: colors.blue1,
        fontSize: 16
    },
    wrapButton: {
        width: '50%',
        marginLeft: '10%',
        marginBottom: -30
    }
})
