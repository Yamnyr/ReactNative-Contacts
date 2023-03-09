import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-web";
import {useNavigation} from "@react-navigation/native";

export default function ContactItem({data}) {
    const {firstName, lastName, avatar, id} = data;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Contact',{itemId: {id}})}>
            <View>
                <Text style={styles.text}>{firstName} {lastName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        opacity: 1,
        margin: 20,
        padding: 15,
        borderRadius: 5,
        borderWidth:3,
        borderColor: '#770046',
    },
    text:{
        fontSize:20,
        color: "white",
        fontWeight: "bold",
    }
});