import React ,{Component} from 'react';
import {View ,
    Text, 
    StyleSheet,
    Image,Slider,
    FlatList,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import Component2 from '../component2/Component2.js';

import { Inonicons,FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import {Field ,reduxForm} from 'redux-form';
export default class Component1 extends Component{
    constructor(props){
        super(props);
        
        this.state={
            data:[
                {name:'57357 Hospital',city:'Egypt'},
                {name:'57357 Hospital',city:'Egypt'}
            ],
            diagnosis:[
              
            ],
            showInput:false,
            BMIValue:0,
            LeptinValue:0,
            GlucoseValue:0,
            AdiponectinValue:0,
            InsulineValue:0,
            ResistinValue:0,
            MCP1Value:0,
    
            text:'',
        }
    
    }
  
    handdleToggleButton=()=> {
        this.setState((state)=>({
            showInput:!state.showInput,
        }))
    }

    reset=()=>{
        this.setState((state)=>({
            BMIValue:0,
            LeptinValue:0,
            GlucoseValue:0,
            AdiponectinValue:0,
            InsulineValue:0,
            ResistinValue:0,
            MCP1Value:0,
        }))
    }

    componentWillMount(){
        this.fetchData();
        this.fetchresults();
    }


    /*
    componentDidMount(){
        fetch('http://192.168.1.9:5000/api.json')
        .then(res=>res.json())
        .then(diagnosis=> {
            this.setState({
                diagnosis
            });
            
        })
        .catch(error=> {
            alert(error);
        
    });  
    }
*/

    fetchData=async()=>{
        //the last number their for the number of apis you need
        const response =await fetch('http://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC')
        const json=await response.json();
        this.setState({data:json})
    }

    fetchresults=async()=>{
        //the last number their for the number of apis you need
        const response =await fetch('http://192.168.1.7:5000/api.json')
        const json=await response.json();
        this.setState({diagnosis:json})
    }
    /*
    
    submit=()=>{      
        fetch('http://192.168.1.6:5000/api',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                BMIValue:this.state.BMIValue,
                LeptinValue:this.state.LeptinValue,
                GlucoseValue:this.state.GlucoseValue,
                AdiponectinValue:this.state.AdiponectinValue,
                InsulineValue:this.state.InsulineValue,
                ResistinValue:this.state.ResistinValue,
                MCP1Value:this.state.MCP1Value,
            })
            
        })

        .then(function(response) {
            alert('Blank'+response);
        })
        .catch(function(error) {
            
            alert('Error'+error);
        });
    }
   */
    /*
  submit=async ()=>{   
      let formData=new formData();
      formdata.append('BMIValue',this.state.BMIValue)
      formdata.append('LeptinValue',this.state.LeptinValue)  
      formdata.append('GlucoseValue',this.state.GlucoseValue)  
      formdata.append('AdiponectinValue',this.state.AdiponectinValue)  
      formdata.append('InsulineValue',this.state.InsulineValue)  
      formdata.append('ResistinValue',this.state.ResistinValue)  
      formdata.append('MCP1Value',this.state.MCP1Value)     
    fetch('http://192.168.1.5:5000/api',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:formData
        
    })

    .then(function(response) {
        
        alert('Blank'+response);
    })

    .then((resonse)=> response.json())

    .then((responsejson)=>{
        this.setState({text:JSON.Stringfy(responsejson)})
    })
    .catch(function(error) {
        
        alert('Error'+error);
    });
}*/


/*
    submit=()=>{
        fetch("http://192.168.1.7:5000/api", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            BMIValue:this.state.BMIValue,
            LeptinValue:this.state.LeptinValue,
            GlucoseValue:this.state.GlucoseValue,
            AdiponectinValue:this.state.AdiponectinValue,
            InsulineValue:this.state.InsulineValue,
            ResistinValue:this.state.ResistinValue,
            MCP1Value:this.state.MCP1Value,
        })
    })

        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData)
            )
        })
        .done();
}
 */

/*
submit=()=>{

    try{
        fetch("http://192.168.1.7:5000/api", {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            BMIValue:this.state.BMIValue,
            LeptinValue:this.state.LeptinValue,
            GlucoseValue:this.state.GlucoseValue,
            AdiponectinValue:this.state.AdiponectinValue,
            InsulineValue:this.state.InsulineValue,
            ResistinValue:this.state.ResistinValue,
            MCP1Value:this.state.MCP1Value,
            
        })
    })
}
    catch(e){
        console.log(e);
    }
   
}
*/
async submit() {
    var data = {
        BMIValue:'this.state.BMIValue',
        LeptinValue:'this.state.LeptinValue',
        GlucoseValue:'this.state.GlucoseValue',
        AdiponectinValue:'this.state.AdiponectinValue',
        InsulineValue:'this.state.InsulineValue',
        ResistinValue:'this.state.ResistinValue',
        MCP1Value:'this.state.MCP1Value',
    };
    try {
     let response = await fetch(
      "http://192.168.1.7:5000/api",
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        alert("authenticated successfully!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
}
    render(){
        const {data,showInput,BMIValue,LeptinValue,GlucoseValue,AdiponectinValue,InsulineValue,ResistinValue,MCP1Value}=this.state
        return(
            <View style={styles.container}>
                <View style={styles.navview}>
                <MaterialCommunityIcons 
                style={{paddingTop:25}}
                name="test-tube"
                color="white"
                size={22}
                />            
                <Text style={styles.navtext}>Cancer Diagnosis</Text>
                </View>
                <View style={{paddingRight:25,justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.titleview}>
                        <Text style={styles.titletext}>Cancer Diagnosis with Blood Test</Text>
                        <Image 
                        style={styles.mainImage}
                        source={require('./images/blood-test.jpg')} 
                        />
                        
                        <Text style={styles.titletext2}>Enter a Valid Data</Text>
                      <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'#ffffff'}}>BMI:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                BMIValue={BMIValue}
                                onValueChange={(BMIValue) => this.setState({ BMIValue })}
                                
                                
                            />
                        <View style={{width:85,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.BMIValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <Text style={{color:'#ffffff'}}>Leptin:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                LeptinValue={LeptinValue}
                                onValueChange={(LeptinValue) => this.setState({ LeptinValue })}
                                
                            />
                        <View style={{width:85,alignItems:  'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.LeptinValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#ffffff'}}>Glucose:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                
                                GlucoseValue={GlucoseValue}
                                onValueChange={(GlucoseValue) => this.setState({ GlucoseValue })}
                            />
                        <View style={{width:85,alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.GlucoseValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#ffffff'}}>Adiponectin:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                
                                AdiponectinValue={AdiponectinValue}
                                onValueChange={(AdiponectinValue) => this.setState({ AdiponectinValue })}
                               
                            />
                        <View style={{width:85,alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.AdiponectinValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#ffffff'}}>Insuline:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"

                                InsulineValue={InsulineValue}
                                onValueChange={(InsulineValue) => this.setState({ InsulineValue })}
                            />
                        <View style={{width:85,justifyContent: 'center',alignItems:  'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.InsulineValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#ffffff'}}>Resistin:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"

                                ResistinValue={ResistinValue}
                                onValueChange={(ResistinValue) => this.setState({ ResistinValue })}
                            />
                        <View style={{width:85,alignItems:  'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.ResistinValue}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View> 
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#ffffff'}}>MCP.1:</Text>
                            <Slider
                                style={{flex: 1}}
                                style={{width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"

                                MCP1Value={MCP1Value}
                                onValueChange={(MCP1Value) => this.setState({ MCP1Value })}
                            />
                        <View style={{width:85,alignItems:  'flex-end'}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.MCP1Value}</Text>
                            <Text style={{fontSize: 14, color: '#ffffff'}}>unit</Text>
                        </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <TouchableOpacity 
                        style={{
                        backgroundColor: '#DDDDDD',
                        padding: 10
                    ,borderRadius:25}}
                        onPress={this.handdleToggleButton}
                        ><Text >Current Hospitals</Text></TouchableOpacity>
                        <Text> </Text>
                        <TouchableOpacity 
                        style={{
                        backgroundColor: '#DDDDDD',
                        padding: 10,borderRadius:25}}
                        onPress={this.reset}
                        ><Text >Reset</Text></TouchableOpacity><Text> </Text>
                                            <TouchableOpacity 
                        style={{
                        backgroundColor: '#DDDDDD',
                        padding: 10
                    ,borderRadius:25}}
                        onPress={this.submit}
                        ><Text >Submit</Text></TouchableOpacity>
                    </View>
                    <Text>{this.state.text}</Text>
                    </View>
                    


                    {showInput===true &&(
                    <View style={styles.formview}>
                        <Text style={{fontWeight:'bold',fontSize:15,paddingLeft:5}}>Available Hospitals</Text>
                            <FlatList 
                            style={{}}
                            data={this.state.data}
                            keyExtractor={(obj,i)=>i}
                            renderItem={({item})=>(
                            <View style={{flex:1,flexWrap:'wrap',paddingLeft:7}}>
                                <Text style={{fontSize:13}}>
                                { `${item.name} Hospital` }
                                </Text>
                                <Text style={{fontSize:11}} >
                                {`in: ${item.city}`}
                                </Text>
                            </View>
                            )}
                        
                            />
                    </View>
                    )}
                </View>
                        <FlatList 
                        data={this.state.diagnosis}
                        keyExtractor={(obj,i)=>i}
                        renderItem={({item})=>(
                            <View style={{flex:1,flexWrap:'wrap',paddingLeft:7}}>
                            <Text style={{fontSize:13}}>
                            { `${item.status} ` }
                            </Text>
                            <Text style={{fontSize:11}} >
                            {`in: ${item.dangerous}`}
                            </Text>
                        </View>
                        )}
                        
                        />
                   
            </View>
        );
    }

}

const styles=StyleSheet.create({
    navview:{
        backgroundColor:'#1c313a',
        height:55,
        flexDirection:'row'
    },
    textInput:{
        
        //alignSelf:'stretch',
        padding:16,
        paddingRight:5,
        marginBottom:20,
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'#ffffff',
        borderRadius:20,
        //justifyContent:'space-between',
        width:80,
        height:20,
        

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
    container:{
        flex:1,
        backgroundColor:'#455a64',


        
    },
    titleview:
    {   
        marginTop:30,
        //flex:1,
        //flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        color:'#ffffff',   
    },
    titletext:{
        color:'#ffffff',
        //fontFamily:'sans-serif-thin',
        fontWeight:'bold',
        fontSize:20,
    },
    titletext2:{
        color:'#ffffff',
        //fontFamily:'sans-serif-thin',
        fontWeight:'bold',
        fontSize:15,
        paddingBottom:25
    },
    mainImage:{
        height:160,
        width:320,
        marginTop:20,
        marginBottom:10,
    

    },

})

