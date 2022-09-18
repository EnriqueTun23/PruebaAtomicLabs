import React from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import { Footer } from './Footer';

export const Backgroud = ({ children }) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/backound.png')} resizeMode="cover" style={styles.image}>
            { children }
        </ImageBackground>
        <Footer />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
})