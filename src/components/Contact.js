import { StyleSheet, Text, View } from 'react-native';
export default function Contact(props) {
    return (
        <View>
            <View style={styles.NavBar}>

                <button style={styles.btn}>Back</button>
                Accueil

                <button style={styles.btn}>Disconnect</button>
                {/*NavBar*/}
            </View>
            <View style={styles.Content}>
                <img></img>
                <text>Nom</text>
                <text>Prenom</text>
                <text>Email</text>
                <text>Téléphone</text>
                <button>Call</button>
            </View>
            <View style={styles.Error}>
                {/*error*/}
                error
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