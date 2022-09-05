import React,{cloneElement, Component} from "react";
import{View,StyleSheet,Text, TouchableHighlight
} from "react-native";

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text>Hi My name is {this.props.name}</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_text :'Hello',
            sub_text :'Ligin'
        }
    }
    updateText(){
        this.setState({main_text:'Hi'})
    }
    render(){
        return(
<View style={styles.container}>
<Text style={styles.textView}>{this.state.main_text}</Text>
<Text style={styles.textView}>{this.state.sub_text}</Text>
<TouchableHighlight style={styles.buttonView} onPress={()=>this.updateText()} underlayColor='grey'>
<Text style={styles.buttonText}>Update</Text>
</TouchableHighlight>
<FlexContent name='Ligin'></FlexContent>
</View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'red',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        
    },
    textView :{
        fontSize:20,
        color: "#33ACFF",
        padding : 5
    },
    buttonView:{
        width :'50%',
        backgroundColor :'green',
        alignContent:"center",
        justifyContent:"center",
        borderRadius:10,
        alignItems:"center"
    },
    buttonText :{
        fontSize:20, 
        fontWeight:'bold',
        color : "white",
        padding:10,
      }
})