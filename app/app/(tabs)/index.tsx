import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://www.semanadesi.com/' }} 
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* isso aqui serve pra impedir que o topo do site fique escondido atras do relogio ou bateria dos nossos celulares */
    marginTop: Constants.statusBarHeight, 
  },
});