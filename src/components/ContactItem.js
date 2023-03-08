import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-web";
import {useNavigation} from "@react-navigation/native";

export default function ContactItem({data}) {
    const {firstName, lastName, avatar, id} = data;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Contact',{itemId: {id}})}>
            <View>
                <Text>{firstName} {lastName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        opacity: 0.8,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
});