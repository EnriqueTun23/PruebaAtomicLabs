import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export const ItemData = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        marginTop: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 29,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center'
    }
})
