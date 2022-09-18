import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Animated
} from 'react-native'
import { MascotImage } from '../components'

export const ThankScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.text}>TUS DATOS HAN SIDO <Text style={styles.text_span}>ENVIADOS CON ÉXITO</Text></Text>
        </View>
        <Text style={[styles.text_info, {marginTop: 20}]}>En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.</Text>
        <Text style={styles.text_info}>Recuerda revisar tu bandeja de SPAM !Experemos verte pronto!</Text>
        <MascotImage url={require('../../assets/img/pose4.png')} />
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
  containerTitle: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: 265,
  },
  text: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
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