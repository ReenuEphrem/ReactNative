import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textView2}>Hi {this.props.name} </Text>
            </View>
        )
    }
}

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            main_text:'Please Login to continue'
        }
    }
    
        Login(){
            this.setState({main_text:'Login Succesfully !!'})
        }
        UpdateText(){
           
        }
    
  render(){
    return(
     <View style={styles.container}> 
          <ImageBackground style ={styles.bgImage} source={require('../assets/bg1.jpg')}></ImageBackground> 
          <Image style ={styles.logo} source={require('../assets/logo.jpg')}></Image>
          <FlexContent style ={styles.textView} name='Reenu'></FlexContent>
          <Text style ={styles.textView}>
           Welcome to GTec Global
          </Text>
          <TextInput style ={styles.inputView} placeholder="Username"placeholderColor="blue" maxLength={10} onChangeText={this.UpdateText()} >
          </TextInput>
          <TextInput style ={styles.inputView} placeholder="Password"  placeholderColor="blue" secureTextEntry={true}>
          </TextInput>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.Login()}>
            <Text style ={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <Text style ={styles.textView1}>
           {this.state.main_text}
          </Text>
     
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height :'100%',
    width :'100%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#ffffff'
  },
  bgImage :{
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
    marginTop:10,
    color:'#33ACFF'
    
  },
  textView1 :{
    fontSize :10,
    fontWeight:"bold",
    marginTop:10
    
  },
  textView2 :{
    fontSize :20,
    fontWeight:"bold"
    
  },
  inputView:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'#33ACFF',
    marginTop:20,
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

