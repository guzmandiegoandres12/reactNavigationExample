import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet ,TouchableHighlight} from 'react-native';

export default function Buttom(props){
  return(
    <TouchableOpacity style={[styles.container]} onPress={props.onPress} >
      <View style={[styles.block,{backgroundColor:props.color}]}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    marginVertical:20,
    minHeight:50,
    borderRadius:25,
    overflow:'hidden',
    shadowColor:'red',
    shadowRadius:0,
    shadowOpacity:1,
    textShadowOffset:{height:10,width:10},
    elevation: 5
  },
  block:{
    flex:1,
    margin:0,
    height:50,
   
    justifyContent:"center",
    alignItems:'center'
  },
  text:{
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'bold'
  }
})