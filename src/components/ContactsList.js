import { StyleSheet, Text, View } from 'react-native';
import {ScrollView} from "react-native-web";
import {Authentification} from "../services/api/auth";
import {setToken} from "../actions/authentification";
import ContactItem from "./ContactItem";

import {useContext, useEffect, useState} from "react";
import {fetchAllContact} from "../services/api/contacts";
import {Context} from "../context/store";
export default function ContactsList() {

    const { state, dispatch } = useContext(Context);
    const [listContacts, setListContacts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchAllContact(state.jwt)
            .then((contacts) => {if (contacts.error) {
                setError(contacts.message);
            } else {
                setListContacts(contacts.map((contact) => (
                     <ContactItem key={contact.id} data={contact}/>
                )));
            }});
    }, [state.jwt]);


    return (
        <View>
            <ScrollView style={styles.Content}>
                {listContacts}
            </ScrollView>
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
        height:'80vh',
        backgroundColor: '#004677',
        textAlign: "center",
    },
    Error:{
        backgroundColor: '#770046',
    },
    error:{
        margin:20,
        color: 'white',
        fontWeight: 'bold'
    },
});