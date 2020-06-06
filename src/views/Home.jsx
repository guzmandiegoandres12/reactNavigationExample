import React from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="contact" onPress={() => {
      }}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    textAlign: 'center'
  }
})
export default Home