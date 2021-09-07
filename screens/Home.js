import React, { Component } from 'react';
import { Text, View ,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
           style={styles.container}>
           <SafeAreaView style={styles.droidSafeArea}/>
           <ImageBackground source={require('../assets/stars.gif')}style={styles.backgroundImage}>

           <View style={styles.titleBar}>
           <Text style={styles.titleText}> STELLER APP </Text>
           </View>
            

            <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("DailyPic")}>
          
            <Text style={styles.routeText}>DAILY PICS</Text>
            <Image source={require('../assets/daily_pictures.png')}style={styles.iconImage}             ></Image>
            </TouchableOpacity>

             <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("SpaceCraft")}>

             <Text style={styles.routeText}>SPACECRAFT</Text>
            <Image source={require('../assets/space_crafts.png')}style={styles.iconImage}></            Image>
            </TouchableOpacity>

             <TouchableOpacity style={styles.routeCard}onPress={()=>
            this.props.navigation.navigate("StarMap")}>

             <Text style={styles.routeText}>STARMAP</Text>
            <Image source={require('../assets/star_map.png')}style={styles.iconImage}></                Image>
            </TouchableOpacity>
            </ImageBackground>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  
  titleText:{
    fontSize:50,
    fontWeight:'bold',
    color:'red'
  },

  droidSafeArea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },

  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },

  routeCard:{
    flex:0.25,
    marginLeft:-10,
    marginRight:10,
    marginTop:50,
    borderRadius:30,
    backgroundColor:'aqua'
  },

  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center"
  },

  routeText:{
    fontSize:35,
    fontWeight:"Bold",
    color:"green",
    marginTop:10,
    paddingLeft:30

  },

  iconImage:{
    position:"absolute",
    height:80,
    width:70,
    resizeMode:"contain",
    right:20,
    top:"-20"

  }
})