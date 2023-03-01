import { StyleSheet, Text, View } from 'react-native';
import {TextInput, TouchableOpacity} from "react-native-web";
import React, { useState } from 'react';
import {Authentification} from "../services/api/auth";


export default function Accueil(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = (username, password) => {
        Authentification({ username} , {password}).then((response) => {

        });
    };

    return (
        <View>
            <View style={styles.NavBar}>
                Accueil
            </View>
            <View style={styles.Content}>
                <View style={styles.container}>
                    <form>
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <TouchableOpacity style={styles.button} onPress={Login}>
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