import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
export default function InputTextCamp (props){

  return(
     <TextInput 
        secureTextEntry={props.protectedText || false }
        style={styles.InputText}
        velue={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
  )
}
InputTextCamp.propTypes={
  secureTextEntry: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
  InputText:{
    marginVertical:10,
    borderWidth:1,
    borderColor:'#848484',
    color:'#848484',
    width:'100%',
    height:50,
    borderRadius:25,
    paddingHorizontal:25,
    fontSize:18
  },
})