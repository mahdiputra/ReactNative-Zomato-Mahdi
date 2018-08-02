import React, {Component } from 'react';
import {Text,View,Button} from 'react-native'

class Dua extends Component {
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text> Halaman Dua </Text>
                <Button title="Ke hala dua ...lagi" onPress={()=> this.props.navigation.navigate('haldua')}/>
                <Button title="Kembali" onPress={()=> this.props.navigation.goBack()} />
             </View>
        )
    }
}

export default Dua;