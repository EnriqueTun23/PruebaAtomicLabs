import React from 'react';

import { View, Image, StyleSheet } from 'react-native';

export const MascotImage = ({ url }) => {
  return (
      <View>
          <Image
              style={styles.img}
              source={url}
              fadeDuration={0}
          />
      </View>
  )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 30,
        width: 360,
        height: 390,
        resizeMode: 'contain',
        alignItems: 'center'
    }
})
