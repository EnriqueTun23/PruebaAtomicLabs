import React from 'react'
import { 
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Animated
} from 'react-native'
import { FormValidation } from '../components/validation/FormValidation'
import { MascotImage } from '../components'

export const ValidationPhoneScreen = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.numbers}>
          <Image style={styles.one} source={require('../../assets/icons/check_orange.png')} />
          <Image style={styles.two} source={require('../../assets/icons/two_orange.png')} />
        </View>

        <View style={{ width: 340, marginTop: 10 }}>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#FA4D09", width: "100%", borderRadius: 10 }} />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Image style={styles.image} source={require('../../assets/icons/two_backogrond_orange.png')} />
          <Text style={styles.text}>VALIDA TU <Text style={styles.text_span}>CELULAR</Text></Text>
        </View>
        <Text style={styles.text_info}>Necesitamos validar tu número para continuar</Text>
        <Text style={styles.text_info}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS</Text>
        <FormValidation params={route.params} navigation={navigation} />
        <MascotImage url={require('../../assets/img/pose3.png')} />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 40,
    alignItems: 'center',
  },
  numbers: {
    width: 300,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  one: {
    width: 40,
    height: 40,
    marginHorizontal: 70
  },
  two: {
    width: 40,
    height: 40,
    marginHorizontal: 70
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10
  },
  containerTitle: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: 305,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 20
  },
  textSing: {
    marginTop: 20,
    fontSize: 20,
    color: 'white'
  },
  text: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  text_span: {
    color: '#FA4D09'
  },
  text_info: {
    width: '100%',
    color: 'white',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  }
})