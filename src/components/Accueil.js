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
    const [login, setUsername] = useState('root');
    const [password, setPassword] = useState('root');
    const [error, setError] = useState(null);


    function handleSubmit() {
        Authentification({ login, password }).then(async (tokens) => {
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

    return (
        <View>
            <View style={styles.NavBar}>
                <Text>Accueil</Text>
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
            </View>
            <View style={styles.Error}>
                <Text>{error}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    NavBar:{
        marginTop: 0,
        backgroundColor: 'red',
        fontSize:30,
        textAlign: "center",
    },
    Content:{
        marginHorizontal: 30,
        backgroundColor: 'blue',
        flex: 1,
        textAlign: "center",
    },
    Error:{
        backgroundColor: 'green',
        marginHorizontal: 30,
        marginTop: 20,
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
        color: 'white',
        borderRadius: 5,
    },
    button: {
        width: '80%',
        marginHorizontal:'10%',
        padding: 10,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor:'grey',

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});