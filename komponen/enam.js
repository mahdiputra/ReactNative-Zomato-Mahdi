import React, {Component} from 'react';
import {Text,View,Button} from 'react-native'

class Enam extends Component{
  render(){
    return(
      <View style={{flex: 1, alignitems:'center', justifyContent:'center'}}>
        <Text> Halaman Enam </Text>
        <Button title="Buka Menu" onPress={
            ()=> this.props.navigation.navigate('DrawerToggle')
        } color={'blue'} />
      </View>
    )
  }
}

export default Enam;