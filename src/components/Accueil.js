import { StyleSheet, Text, View } from 'react-native';
import {TextInput, TouchableOpacity} from "react-native-web";
import React, {useContext, useReducer, useState} from 'react';
import {Authentification} from "../services/api/auth";
import * as Keychain from 'react-native-keychain';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Context} from "../context/store";
import {reducer} from "../reducer/Reducer";
import useAuth from "../hook/auth";
import {setRefreshToken, setToken} from "../actions/authentification";



export default function Accueil({navigation}) {
    const { dispatch } = useContext(Context);
    const [login, setUsername] = useState('test');
    const [password, setPassword] = useState('test');
    const [error, setError] = useState(null);


    // const credentials = await Keychain.getGenericPassword();
    // if (credentials) {
    //     console.log(
    //         'Credentials successfully loaded for user ' + credentials
    //     );
    //     authentication(credentials)
    // } else {
    //     console.log('No credentials stored');
    // }

    /*
    je recupère le refreshtoken
    verifie si il est set
    si oui lance la meyhode autentification
    si non ne fait rien
    */

    function authentication(params) {
        Authentification(params).then(async (tokens) => {
            if (tokens.error) {
                setError(tokens.message);
            } else {
                const {jwt, refreshToken} = tokens;
                // await Keychain.setGenericPassword("refreshToken", refreshToken);
                // dispatch({type: "SET_JWT", jwt});
                dispatch(setToken(jwt));

                console.log("Accueil::handleSubmit", tokens)
            }
        });
    }


    function handleSubmit() {
        authentication({ login, password });
    }

    return (
        <View>
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
            </View>
            <View style={styles.Error}>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Content:{
        backgroundColor: '#004677',
        textAlign: "center",
        height:'80vh',
    },
    Error:{
        backgroundColor: '#770046',
    },
    error:{
        margin:20,
        color: 'white',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        margin: 12,
        borderWidth: 3,
        borderColor: '#770046',
        padding: 10,
        fontSize:20,
        color: 'white',
        borderRadius: 5,
        fontWeight: "bold",
    },
    button: {
        width: '80%',
        marginHorizontal:'10%',
        padding: 10,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor:'#770046',

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    },
});