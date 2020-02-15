import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './components/component1/Component1';
import Component2 from './components/component2/Component2';
import Component3 from './components/component3/Component3';
import Login from './components/component4/Component4';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import {Provider} from 'react-redux';
import store from './store'
export default Tabs=createBottomTabNavigator({

  Login:{
    screen:Login
  },
  Signup:{
    screen:Component3
  },
  Hospitals:{
    screen:Component1
  }
})


const Application=createStackNavigator({
  Login:{
    screen:Login
  },
  Signup:{
    screen:Component3
  },
  Hospitals:{
    screen:Component1
  }
})
export  function App() {
  return (
    <Provider store={store}>
      <View >
        <Application />
      </View>
    </Provider>
  );
}
