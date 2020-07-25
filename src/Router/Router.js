import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, Info, Pesan, Splash, GetStarted, Register, Login, ListDokter, Pendaftaran, Resep, Layanan, NoPasien, NotFound } from '../pages';
import { TabBar } from './BottomNavigation';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator 
        backBehavior='initialRoute'
        tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Info" component={Info} />
            <Tab.Screen name="Pesan" component={Pesan} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ListDokter" component={ListDokter} />
            <Stack.Screen name="Pendaftaran" component={Pendaftaran} />
            <Stack.Screen name="Resep" component={Resep} />
            <Stack.Screen name="Layanan" component={Layanan} />
            <Stack.Screen name="NoPasien" component={NoPasien} />
            <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
    )
}

export default Router

