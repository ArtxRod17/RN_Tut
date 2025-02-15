import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>Go to About Screen</Link>
    </View>
  );
}

//Styles object
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'red'
  },
});
