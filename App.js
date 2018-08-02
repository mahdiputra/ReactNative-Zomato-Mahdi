import React, { Component} from 'react';
import { Text, View ,Button,Image} from 'react-native'
import axios from 'axios'
// import {Header} from 'react-native-elements'
import {Form,Item,Label,Input,Header,Icon,Card,CardItem,Content,Left,Right,Body,Thumbnail, Container} from 'native-base'
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
class App extends Component {
 
  constructor(){
    super();
    this.state = {
      dataku :[],resto:[]}
  }

    klik=()=>{
      var url=` https://developers.zomato.com/api/v2.1/search?q=${this.state.search}`
      var config ={
          headers: {'user-key':'a12dc5e846e6748b674256aad08dca48'}
      } 
    axios.get(url, config).then((x) => {
      // console.log(x.data);
      this.setState({ resto: x.data.restaurants })
    })
    
  }
  render(){
    const dataResto = this.state.resto.map((a,b)=>{
      var nama = a.restaurant.name;
      var alamat = a.restaurant.location.address;
      var foto = a.restaurant.thumb;
      var kota = a.restaurant.location.city;
      var harga = (a.restaurant.average_cost_for_two/2)

      // return(
      //   <Text key={b}>
      //    {nama}
      //    {alamat} 
      //    {kota}  
      //    {harga}
      //   </Text>
      //   )

        return(
          <Card key = {b} style = {{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: foto}} />
                <Body>
                  <Text>{nama}</Text>
                  <Text note>{kota}</Text>
                </Body>
              </Left>

              <Right>
                <Text>{harga}</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Image source = {{uri: foto}} style = {{height: 150, width : 300, flex: 0}} />
              </Body>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name = "thumbs-up" />
                <Text>{alamat}</Text>
              </Left>
            </CardItem>

          </Card>
  )
})
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor:"red"}}>
          <Item>
            <Icon name="search" />
            <Input placeholder="cari menu makanan.." onChangeText={(input)=>this.setState({search:input})}/>
          </Item>
        </Header>
        <Button  title='Lihat daftar resto' color='red' onPress={this.klik}/>

         <Content>
              {dataResto}
          </Content> 

        <Icon name="share"/>
      </Container>
    )
  }
}

export default App;