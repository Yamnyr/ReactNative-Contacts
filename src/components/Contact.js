import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {fetchAllContact, fetchContact} from "../services/api/contacts";
import ContactItem from "./ContactItem";
import {Context} from "../context/store";
import {setToken} from "../actions/authentification";
import {TouchableOpacity} from "react-native-web";

export default function Contact({route}) {
    const { state, dispatch } = useContext(Context);
    const { itemId } = route.params;

    console.log({itemId})
    const [avatar, setAvatar] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContact(state.jwt, itemId.id)
            .then((contact) => {
                setAvatar(contact.avatar),
                    setPrenom(contact.firstName),
                    setNom(contact.lastName)
                setEmail(contact.email)
                setTelephone(contact.phone)
            });
    }, [itemId]);

    return (
        <View>
            <View style={styles.Content}>
                <Image style={styles.avatar} source={{uri: avatar}} />
                <Text style={styles.text}>{prenom} {nom}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{telephone}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
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
});
