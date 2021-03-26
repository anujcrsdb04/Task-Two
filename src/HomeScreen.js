import * as React from 'react';

import { StyleSheet, Text, View, StatusBar, TouchableOpacity ,Dimensions, Alert} from 'react-native';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
import axios from 'axios';
export default function HomeScreen({route, navigation }) {
  const { Email } = route.params;
  const [id, setId] = React.useState(86);

  // React.useEffect(() => {
  //   if (id == null || id === '') {
  //     return;
  //   }
  //   axios.get('https://empti.org/empti/public/api/user/outletDetail', {outlet_id : id})
  //   .then(function (response) {

  //       console.log('Res ..... home' + JSON.stringify(response))
  //       alert('response Home' + JSON.stringify(response))

  //   }).catch(function (error) {
  //       console.log(' error Homee .....' + error)
  //   }).finally(function () {
  //       console.log('Finaly homee .....')
  //   });
  // }, [id]);
const functioncall = () => {


}
  return (
    <View style={styles.MainContainer}>
      <View style={styles.navigationHeaderContainer}>
        <StatusBar backgroundColor='#146A7F' hidden={false} />
        <TouchableOpacity style={{ position: 'absolute', left: 18, height: 20, }}
          onPress={() => alert('Menu')
          }><Text  style={{
            color: '#fff',
            fontSize: 16,
            fontWeight:'bold'
          }}>Menu</Text></TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', right: 18, height: 20, }}
          onPress={() => Alert.alert(
            'Logout',
            'Would you like to logout ?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]
          )}><Text  style={{
            color: '#fff',
            fontSize: 16,
            fontWeight:'bold'
          }}>Logout</Text></TouchableOpacity>
      </View>
      <View style={styles.navigationHeaderContainer2}>
        <Text style={{ marginLeft: 15, marginVertical: 15, color: '#fff', fontSize: 20 }}>Hello,{"\n"}{Email}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center'
  },

  text: {
    textAlign: 'center',
    margin: 12,
    fontSize: 22,
    fontWeight: "100",
  },
  navigationHeaderContainer: {
    height:40,
    width: screenWidth,
    color: "blue",
    justifyContent: 'center',
    backgroundColor: '#146A7F'
  },
  navigationHeaderContainer2: {
    height:100,
    width: screenWidth,
    color: "blue",
    justifyContent: 'center',
    backgroundColor: '#146A7F'
  },
});