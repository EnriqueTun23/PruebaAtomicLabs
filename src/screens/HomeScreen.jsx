import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

import { MascotImage } from '../components';
import { TitleHome, ListFlags, Equip } from '../components/home';



export const HomeScreen = ({ navigation }) => {

  return (
      <ScrollView>
        <View style={styles.container}>
          <TitleHome navigation={navigation} />
          <MascotImage url={require('../../assets/img/pose1.png')} />
          <TouchableHighlight
            underlayColor='rgba(73,182,77,1,0.9)'
            onPress={() => navigation.navigate('SignUp')}
            style={styles.btn}
          >
            <Text style={styles.btn_text}>¡Quiero ser parte!</Text>
          </TouchableHighlight>
          <Text style={styles.txt_white}>SOMOS EL  BRAZO DERECHO <Text style={styles.txt_orange}>DE LA TECNOLOGÍA</Text> </Text>
          <ListFlags />
          <Text style={styles.txt_white}>¡TE ENCANTARÁ <Text style={styles.txt_orange}>TRABAJAR CON NOSOTROS!</Text></Text>

          <Image 
            source={require('../../assets/group.png')}
            style={{ width: 400, height: 200, resizeMode: "contain", }} 
          />

          <TouchableHighlight
            underlayColor='rgba(73,182,77,1,0.9)'
            onPress={() => navigation.navigate('SignUp')}
            style={styles.btn}
          >
            <Text style={styles.btn_text}>¡Quiero ser parte!</Text>
          </TouchableHighlight>

          <Text style={styles.txt_white}> NUESTRO <Text style={styles.txt_orange}>EQUIPO</Text></Text>

          <Equip />
        </View>

      </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 170,
    height: 55,
    borderRadius: 20
  },
  btn_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0C67A0'
  },
  txt_white: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25, 
    marginButton: 25, 
  },
  txt_orange: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FA4D09',
    textAlign: 'center'
  }
});