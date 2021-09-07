import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    Image,
    Touchable
} from "react-native";
import WebView from 'react-native-webview';

export default class StarMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: '',
            latitude: ''
        };
    }

    render() {
    const {longitude,latitude}=this.state;
    const path='https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

            return (
                <View style={{flex:1,backgroundColor:"red"}}>
                    <SafeAreaView style={styles.droidSafeArea} />
                  <View style={{flex:0.3,marginTop:20,alignItems:'center'}}>
            
                            <Text style={styles.titleText}>StarMap</Text>
                            <TextInput
                            style={styles.inputStyle}
                            placeholder="Enter your longitude"
                            placeholderTextColor="white"
                            onChangeText={(text)=>{
                              this.setState({longitude:text})
                            }}
                            />
                                  <TextInput
                            style={styles.inputStyle}
                            placeholder="Enter your latitude"
                            placeholderTextColor="white"
                            onChangeText={(text)=>{
                              this.setState({latitude:text})
                            }}
                            />
        </View>
        <WebView
        scalesPageToFit={true}
        source={{uri:path}}
        style={{marginTop:20,marginBottom:20}}/>
        </View>
            )            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignItems: "center"
    },

inputStyle:{
  height:40,
  borderColor:'grey',
  borderWidth:1,
  borderRadius:20,
  marginTop:20,
  marginRight:20,
  marginLeft:20,
  textAlign:'center',
  color:'white',
  width:200
}
});