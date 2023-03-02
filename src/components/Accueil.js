import { StyleSheet, Text, View } from 'react-native';
import {TextInput, TouchableOpacity} from "react-native-web";
import React, {useContext, useState} from 'react';
import {Authentification} from "../services/api/auth";
import * as Keychain from 'react-native-keychain';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Context} from "../context/store";


export default function Accueil(props) {
    const { dispatch } = useContext(Context);
    const [login, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        Authentification({ login, password }).then(async (tokens) => {
            // window.location.reload();
            const {jwt, refreshToken} = tokens;
            await Keychain.setGenericPassword("refreshToken", refreshToken);
            dispatch({type: "SET_JWT", jwt});
            console.log("Accueil::handleSubmit", tokens)
        });
    }

    return (
        <View>
            <View style={styles.NavBar}>
                Accueil
            </View>
            <View style={styles.Content}>
                <View style={styles.container}>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            onChange={(e) => setUsername(e.target.value)}
                            value={login}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            secureTextEntry={true}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Se connecter</Text>
                        </TouchableOpacity>
                    </form>
                </View>
                    content
            </View>
            <View style={styles.Error}>
                error
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    NavBar:{
        marginTop: "0vw",
        backgroundColor: 'red',
        width:'100vw',
        fontSize:30,
        textAlign: "center",
    },
    Content:{
        marginHorizontal: 30,
        backgroundColor: 'blue',
        height: '80vh',
        textAlign: "center",
    },
    Error:{
        backgroundColor: 'green',
        marginHorizontal: 30,
        marginTop: 20,
        height: '10vh'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        fontSize:20,
        color: 'white'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor:'grey',
        marginHorizontal:50
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});