import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";
export default class App extends Component{
  render(){
    return(
    //  <View style={{height:'100%', width:'100%' ,backgroundColor:'#008000'}}>
    //  </View>
     <View style={styles.container}>
      <ImageBackground source={require('./assets/bg1.jpg')}
        style ={styles.bgImage}></ImageBackground>
          <Image source={require('./assets/logo.jpg')}
          style ={styles.logo}>

          </Image>
          <Text style ={styles.textView}>
            Welcome to Global Tec
          </Text>
          <TextInput style ={styles.inputView} placeholder="Username"placeholderColor="blue" maxLength={10}>
          </TextInput>
          <TextInput style ={styles.inputView} placeholder="Password"  placeholderColor="blue" secureTextEntry={true}>
          </TextInput>
          <TouchableHighlight style ={styles.buttonView}>
            <Text style ={styles.buttonText}>Login</Text>
          </TouchableHighlight>
      
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height :'100%',
    width :'100%',
    backgroundColor :'#ffffff'
  },
  bgImage :{
    height :'100%',
    width :'100%',
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
    height :100,
    width :100,
    marginBottom:5
    
  },
  textView :{
    fontSize :20,
    fontWeight:"bold",
    marginTop:5,
    
  },
  inputView:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'#33ACFF',
    marginTop:50,
    paddingLeft:20
  },
  buttonView:{
    width:'50%',
    height :55,
    backgroundColor:'#33ACFF',
    marginTop:20,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"

  },
  buttonText :{
    fontSize:20,
    fontWeight:'bold',
    color : "white"
  }
})

