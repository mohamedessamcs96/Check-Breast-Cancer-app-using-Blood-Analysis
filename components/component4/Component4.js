import React ,{Component} from 'react';
import {View ,Text, StyleSheet,Switch,TextInput,Image,KeyboardAvoidingView,AsyncStorage,
ActivityIndicator,WebView,TouchableOpacity
} from 'react-native';
import { Inonicons,FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'


export default class Login extends Component{

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
        var value=await AsyncStorage.getItem('user');
        if(value !==null){
            this.props.navigation.navigate('Profile');
        }
    }

    login=()=>{
        fetch('http://192.168.1.8:3000/users',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password,
            })
        })
        .then((response =>response.json()))
        .then((res)=>{
            
            if(res.success===true){
                AsyncStorage.setItem('user',res.user);
                this.props.navigation.navigate('Component1')
            }
            else{
                alert(res.message);
            }
        }).done()
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
                <Text style={[styles.navtext,]}>Cancer Diagnosis</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.header}>-Login-</Text>
                    <TextInput 
                        style={styles.textInput} placeholder='Username'
                        onChangeText={(username)=> this.setState({username})}
                        underlineColorAndroid='transparent'

                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Password'
                        onChangeText={(password)=> this.setState({password})}
                        secureTextEntry={true} underlineColorAndroid='transparent'

                    />

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={this.login}
                    ><Text style={{color:'white',fontWeight:'bold'}}>Login</Text></TouchableOpacity>
                
                    <View style={styles.signupTextCon}>
                        <Text style={styles.signupText}>Don't have an account yet?</Text>
                        <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Signup')}
                        >
                        <Text style={styles.signupButton}> Signup</Text>
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