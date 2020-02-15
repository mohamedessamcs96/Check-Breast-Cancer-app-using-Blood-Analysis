import React ,{Component} from 'react';
import {View ,Text, StyleSheet,Switch,TextInput,Image,KeyboardAvoidingView,AsyncStorage,
ActivityIndicator,WebView,TouchableOpacity
} from 'react-native';
import { Inonicons,FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'



export default class Component3 extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
    }
}


componentDidMount(){
    this._loadInitialState().done();
}
_loadInitialState=async ()=>{
    
}

signup=()=>{
    alert('Test');
}

  
  render(){

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.navview}>
            <MaterialCommunityIcons 
                style={{paddingTop:25}}
                name="test-tube"
                color="white"
                size={22}
                />    
            <Text style={styles.navtext}>Cancer Diagnosis</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>-Signup-</Text>
                <TextInput 
                    style={styles.textInput} placeholder='Username'
                    onChangeText={(username)=> this.setState({username})}
                    underlineColorAndroid='transparent'

                />
                <TextInput 
                    style={styles.textInput} placeholder='Password'
                    onChangeText={(password)=> this.setState({password})}
                    secureTextEntry={true} 
                    underlineColorAndroid='transparent'

                />
                <TextInput 
                    style={styles.textInput} placeholder='Password Again'
                    onChangeText={(password)=> this.setState({password})}
                    secureTextEntry={true} 
                    underlineColorAndroid='transparent'

                />

                <TouchableOpacity
                style={styles.btn}
                onPress={this.Signup}
                ><Text style={{color:'white',fontWeight:'bold'}}>Signup</Text></TouchableOpacity>
                
                <View style={styles.signupTextCon}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Login')}
                    >
                    <Text style={styles.signupButton}> Login</Text>
                    </TouchableOpacity>
                    </View>
            
            </View>

        </KeyboardAvoidingView>
    );


}


}

const styles=StyleSheet.create({

wrapper:
{
   flex:1
},
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#455a64',
    paddingLeft:40,
    paddingRight:40,
},
header:{
    fontSize:24,
    marginBottom:60,
    color:'#fff',
    fontWeight:'bold'
},
textInput:{
    alignSelf:'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'rgba(255,255,255,0.3)',
    color:'#ffffff',
    borderRadius:25,

},
btn:{
    alignSelf:'stretch',
    backgroundColor:'#1c313a',
    padding:20,
    alignItems:'center',
    borderRadius:25,
    
}

,navview:{
    backgroundColor:'#1c313a',
    height:55,
    flexDirection:'row'
},
navtext:{
    color:'white',
    fontFamily:'sans-serif-thin',
    fontWeight:'bold',
    paddingTop:23,
    paddingBottom:10,
    paddingLeft:5,
    fontSize:15,

},
titleview:
{   
    marginTop:30,
    //flex:1,
    //flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'   
},
titletext:{
    color:'black',
    //fontFamily:'sans-serif-thin',
    fontWeight:'bold',
    fontSize:15,
},
mainImage:{
    height:160,
    width:320,
    marginTop:20,
    marginBottom:10

},
signupTextCon:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:16,
    marginTop:70,
    flexDirection:'row'
},
signupText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:12,
    justifyContent:'flex-end',
},
signupButton:{
    color:'#ffffff',
    fontSize:14,
    fontWeight:'500'
}

})