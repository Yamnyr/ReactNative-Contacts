import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from "./src/components/Accueil";
import ContactsList from "./src/components/ContactsList";
import Contact from "./src/components/Contact";
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={Accueil} />
                <Stack.Screen name="ContactsList" component={ContactsList} />
                <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    App:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 0,
    }
});
