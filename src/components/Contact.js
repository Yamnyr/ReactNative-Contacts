import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {deleteContact, fetchAllContact, fetchContact} from "../services/api/contacts";
import ContactItem from "./ContactItem";
import {Context} from "../context/store";
import {setToken} from "../actions/authentification";
import {TouchableOpacity} from "react-native-web";
import {useNavigation} from "@react-navigation/native";

export default function Contact({route}) {
    const { state, dispatch } = useContext(Context);
    const { itemId } = route.params;

    const [avatar, setAvatar] = useState('')
    const [lastname, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(null);
    const [contact, setContact] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        fetchContact(state.jwt, itemId.id)
            .then((contact) => {
                setAvatar(contact.avatar),
                    setFirstName(contact.firstName),
                    setLastName(contact.lastName)
                setEmail(contact.email)
                setPhone(contact.phone)
                setContact(contact)
            });
    }, [itemId]);

    return (
        <View>
            <View style={styles.Content}>
                <Image style={styles.avatar} source={{uri: avatar}} />
                <Text style={styles.text}>{firstName} {lastname}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{phone}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Appeler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactEdit',{itemId: itemId.id, data:contact})}>
                    <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => deleteContact(state.jwt, itemId.id).then(navigation.navigate('ContactsList'))}>
                    <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
            </View>
                <button style={styles.disconnect} onClick={() => dispatch(setToken(null))}>Se deconnecter</button>
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
});
