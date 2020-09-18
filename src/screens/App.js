import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaViewtestID
} from 'react-native';

const App = () =>{
  return (
    <SafeAreaView testID='main'style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Big Blue</Text>
      <Text style={styles.smallRed}>Small Red</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
    
  bigBlue:{
    color:'blue',
    fontSize:50
  },
  
  smallRed:{
    color:'red',
    fontSize:20
  }

});

export default App;
