import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
//Imports
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('you did not select any image')
    }
  }

  return (
    <View style={styles.container}>  
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="use this photo" />
      </View>
    </View>
  );
}

//Styles object
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});
