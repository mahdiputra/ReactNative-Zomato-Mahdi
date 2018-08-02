import React, {Component} from 'react';
import {Text,View,Button} from 'react-native'

class Satu extends Component{
  render(){
    return(
      <View style={{flex: 1, alignitems:'center', justifyContent:'center'}}>
        <Text> Halaman Satu </Text>
        <Button title="ke Hlaman dua" onPress={()=> this.props.navigation.navigate('haldua')}/>
      </View>
    )
  }
}

export default Satu;