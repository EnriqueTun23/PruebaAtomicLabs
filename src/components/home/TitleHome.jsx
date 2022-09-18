import React from 'react'
import { 
  Image, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View } from 'react-native';

export const TitleHome = ({ navigation }) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.text_one}>Desarrolla todo <Text style={styles.text_two}>tu POTENCIAL</Text> dentro del equipo <Text style={styles.text_two}>ATOMIC</Text>LABS</Text>

      <TouchableHighlight
        underlayColor='rgba(73,182,77,1,0.9)'
        onPress={() => navigation.navigate('SignUp')}
      >
        <Image
            source={require('../../../assets/icons/group.png')}
            fadeDuration={0}
            style={styles.iconsImg}
        />
      </TouchableHighlight>
          
      <Text style={styles.info}>Quiero saber más</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  cont: {
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  text_one: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text_two: {
    color: '#FA4D09',
    fontSize: 43,
    fontWeight: 'bold',
  },
  iconsImg: {
    marginTop: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  info: {
    color: '#fff',
    fontSize: 20
  },
});