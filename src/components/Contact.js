import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {fetchAllContact, fetchContact} from "../services/api/contacts";
import ContactItem from "./ContactItem";
export default function Contact(route) {
    const { itemId } = route.params;

    console.log({itemId})
    const [avatar, setAvatar] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')

    // console.log("contact--itemId", itemId)


/*    useEffect(() => {
        fetchContact(itemId)
            .then((contact) => {
                setAvatar(contact.avatar),
                setPrenom(contact.prenom),
                setNom(contact.nom)
            });
    }, [itemId]);*/



    return (
        <View>
            <View style={styles.NavBar}>

                <button style={styles.btn}>Back</button>

                <button style={styles.btn}>Disconnect</button>
                {/*NavBar*/}
            </View>
            <View style={styles.Content}>
                {/*<Text>{itemId.id}</Text>*/}
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>Prenom</Text>
                <Text>Email</Text>
                <Text>Téléphone</Text>
                <button>Call</button>
            </View>
            <View style={styles.Error}>
                {/*error*/}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    NavBar:{
        marginTop: "0vw",
        backgroundColor: 'red',
        width:'100vw',
        fontSize:30,
        textAlign: "center",
        flexDirection:'row',
        justifyContent: 'space-between',

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
    btn:{
        width: 100
    }
});