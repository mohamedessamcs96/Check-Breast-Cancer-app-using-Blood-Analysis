import React ,{Component} from 'react';
import {View ,Text, StyleSheet,Switch,TextInput,Image,KeyboardAvoidingView,
ActivityIndicator,WebView,
} from 'react-native';



export default class Component2 extends Component{
    state={
        input:'@mohamed96.essam',
        showInput:false,
    }

    handleToggleSwitch=()=>{
        this.setState((state)=> ({
            showInput:!state.showInput,

        }))

    }

    handleTextChange=(input)=>{
        input
    }
    render(){
        const {input,showInput}=this.state
        return(
            <View>
                <View style={styles.navview}>
                <Text style={styles.navtext}>Cancer Diagnosis</Text>
                </View>
                <KeyboardAvoidingView style={{justifyContent:'center',
                alignItems:'center'}}>
                    <ActivityIndicator  size="large" color="#0000ff" />
                    
                    <Image 
                    source={require('./images/blood-test2.jpg')}
                    style={{        
                        height:160,
                        width:320,
                        marginTop:20,}}
                    />
                    
                    <Switch
                        value={showInput}
                        onValueChange={this.handleToggleSwitch}
                        
                        /> 
                        {showInput===true &&(
                            <TextInput 
                            value={input}
                            style={{width:200,
                                height:44,
                                padding:8
                                ,borderWidth:1
                                ,borderColor:'#757575',
                            margin:50}}
                            onChange={this.handleTextChange}
                            
                            />
                        ) }
        
                </KeyboardAvoidingView>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    navview:{
        backgroundColor:'black',
        height:47
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
})