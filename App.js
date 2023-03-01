import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from "./src/components/Accueil";

export default function App() {
  return (
    <View style={styles.App}>
      <Accueil Title={'test'}></Accueil>
    </View>
  );
}

const styles = StyleSheet.create({
    App:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
    }
});
