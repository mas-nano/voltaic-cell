import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{height: 100, width: 100, backgroundColor: 'blue'}}/>
      <Text>Hello World!</Text>
      <Text>Muhammad Nabil</Text>
      <Last />
      <Gambar />
    </View>
    );
};

const Last = () => {
  return <Text>Islam</Text>;
}

const Gambar = () => {
  return <Image 
          source = {{uri: 'https://placeimg.com/640/480/tech'}}
          style = {{height: 100, width: 100}}
          />;
}

export default App;