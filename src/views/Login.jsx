import React , {useState} from 'react';
import {View, Text, TouchableHighlight, StyleSheet,TextInput, ImageBackground} from 'react-native'
import {useTextInputController} from '../Hooks/index';
import InputTextCamp from '../componets/formsComponets/InputTextCamp';
import Button from '../componets/formsComponets/Buttom';
import Fondo from '../assets/images/Background.png';
function Login(props) {

  const email= useTextInputController('')
  const password= useTextInputController('')
  return (
    <ImageBackground style={styles.background} >
      <View style={styles.container}  >
        <Text style={styles.title}>Login</Text>
        <InputTextCamp
          placeholder="Usuario"
         {...email} 
        />
        <InputTextCamp
          protectedText
          placeholder="Contraseña"
        {...email} 
      />
       
        <Button 
          title="Entrar"
          color="#19647e"
          onPress={()=>{
            props.navigation.navigate('HomeLayout')
          }}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container:{
    margin:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    padding: 50,
    width: 300,
    borderRadius:10
  }, 
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:32,
    marginBottom:15,
    fontWeight:'bold'
  }
})
export default Login