import { StyleSheet, Text, View } from 'react-native';
import {ScrollView} from "react-native-web";
export default function ContactsList(props) {

    return (
        <View>
            <View style={styles.NavBar}>

                Accueil
                {/*NavBar*/}
                <button style={styles.btn}>Disconnect</button>
            </View>
            <ScrollView style={styles.Content}>

                liste de contact
            </ScrollView>
            <View style={styles.Error}>
                {/*error*/}
                error
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
        height: '10vh'

    },
});