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

    console.log("ContactsList", state)

    useEffect(() => {
        fetchAllContact(state.jwt)
            .then((contacts) => {
                setListContacts(contacts.map((contact) => (
                     <ContactItem key={contact.id} data={contact}/>
                )));
            });
    }, [state.jwt]);


    return (
        <View>
            <View style={styles.NavBar}>
                <Text>Accueil</Text>
                <button style={styles.btn} onClick={() => dispatch(setToken(null))}>Disconnect</button>
            </View>
            <ScrollView style={styles.Content}>
                {listContacts}
            </ScrollView>
            <View style={styles.Error}>
                <Text>{error}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    NavBar:{
        textAlign: "center",
        justifyContent: 'space-between',
        marginTop: "0vw",
        backgroundColor: 'red',
        width:'100vw',
        fontSize:30,
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
    },
});