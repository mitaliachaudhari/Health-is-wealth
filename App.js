import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

import SpaceCraftscreen from "./screens/SpaceCraft";
import Dailypicscreen from "./screens/Dailypic";
import StarMapscreen from "./screens/StarMap";
import Homescreen from "./screens/Home";

const Stack=createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator intialRouteName="Home" screensOptions={{
      headerShown:false
    }}>
    <Stack.Screen name="Home" component={Homescreen}/>
     <Stack.Screen name="Dailypic" component={Dailypicscreen}/>
    <Stack.Screen name="SpaceCraft" component={SpaceCraftscreen}/>
    <Stack.Screen name="StarMap" component={StarMapscreen}/>
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

