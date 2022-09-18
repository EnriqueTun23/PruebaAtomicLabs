import React from 'react'
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Animated
} from 'react-native'
import { FormSignUp } from '../components/SignUp/FormSignUp'
import { MascotImage } from '../components';

export const SignUpScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.numbers}>
          <Image style={styles.one} source={require('../../assets/icons/one.png')} />
          <Image style={styles.two} source={require('../../assets/icons/two.png')} />
        </View>
        <View style={{ width: 340, marginTop: 10}}>
          <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#FA4D09", width: "40%", borderRadius: 10}} />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Image style={styles.image} source={require('../../assets/icons/one.png')} />
          <Text style={styles.text}>TE QUEREMOS <Text style={styles.text_span}>CONOCER</Text></Text>
        </View>
        <Text style={styles.textSing}> saber que eres tú, por favor ingresa los siguientes datos:</Text>
        <FormSignUp navigation={navigation} />
        <MascotImage url={require('../../assets/img/pose2.png')} />
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
    alignItems: 'center',
    flexDirection: 'row',
    width: 320,
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
  }
})
