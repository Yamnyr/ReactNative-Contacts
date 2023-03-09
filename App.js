import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from "./src/components/Accueil";
import ContactsList from "./src/components/ContactsList";
import Contact from "./src/components/Contact";
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from "./src/hook/auth";
import {Context} from "./src/context/store";
import {reducer} from "./src/reducer/Reducer";
import {useReducer} from "react";
import ContactEdit from "./src/components/ContactEdit";

const Stack = createNativeStackNavigator();

export default function App() {
    const defaultState = {
        jwt: null,
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    let navigator = (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={Accueil} />
        </Stack.Navigator>
    );
    if (state.jwt) {
        navigator = (
            <Stack.Navigator>
                <Stack.Screen name="ContactsList" component={ContactsList} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="ContactEdit" component={ContactEdit} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Context.Provider value={{state, dispatch}}>
                {navigator}
            </Context.Provider>
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
