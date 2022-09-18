import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Footer = () => {
  return (
      <View style={styles.footer}>
          <Text style={styles.textColor} >© AtomicLabs, Todos los derechos reservados.</Text>
          <Text style={styles.textColor} >Aviso de privacidad</Text>
          <View style={styles.containerIcons}>
              <Image
                  source={require('../../assets/icons/linkedin.png')}
                  fadeDuration={0}
                  style={styles.iconsImg}
              />
              <Image
                  source={require('../../assets/icons/twitter.png')}
                  fadeDuration={0}
                  style={styles.iconsImg}
              />
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
    textColor: {
        color: '#fff',
        marginBottom: 15
    },
    containerIcons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    iconsImg: {
        width: 20,
        height: 20,
        marginHorizontal: 10
    }

})