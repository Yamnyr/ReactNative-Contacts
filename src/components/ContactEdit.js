import { StyleSheet, Text, View } from 'react-native';
import React, {useContext, useState} from "react";
import {editContact} from "../services/api/contacts";
import {Context} from "../context/store";
import {setToken} from "../actions/authentification";
import {TextInput, TouchableOpacity} from "react-native-web";
import {useNavigation} from "@react-navigation/native";

export default function ContactEdit({route}) {
    const { state, dispatch } = useContext(Context);
    const { itemId } = route.params;
    const {data} = route.params

    const [avatar, setAvatar] = useState(data.avatar)
    const [lastname, setLastName] = useState(data.lastName)
    const [firstName, setFirstName] = useState(data.firstName)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    function contactEdit(params) {
        editContact(state.jwt, params, itemId).then((contact) => {if (contact.error) {
            setError(contact.message);
            console.log('good')
            navigation.navigate('ContactsList')
        } else {
            console.log('pas good')
            setError(contact.message);
            navigation.navigate('ContactsList')
            }
        });
    }

    function handleSubmit() {
        contactEdit({ ...data, firstName, lastname, email, phone, avatar });
    }

    return (
        <View>
            <View style={styles.Content}>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        style={styles.input}
                        placeholder={data.firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={data.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={data.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={data.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={data.avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Valider</Text>
                    </TouchableOpacity>
                </form>
            </View>
            <button style={styles.disconnect} onClick={() => dispatch(setToken(null))}>Disconnect</button>
            <View style={styles.Error}>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    disconnect:{
        border: 'none',
        color:"white",
        fontSize:20,
        padding:10,
        fontWeight:"bold",
        backgroundColor:'#770046',
    },
    Content:{
        backgroundColor: '#004677',
        height: '80vh',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center'
    },
    /*text: {
        backgroundColor: '#fff',
        opacity: 0.7,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },*/
    text: {
        backgroundColor: 'transparent',
        opacity: 1,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        borderWidth:3,
        borderColor: '#770046',
        width: '80%',
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 20,
        borderColor:'#770046',
        borderWidth:3,
    },
    Error:{
        backgroundColor: '#770046',
    },
    error:{
        margin:20,
        color: 'white',
        fontWeight: 'bold'
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
        textAlign: 'center',
        fontWeight: "bold",
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
});
