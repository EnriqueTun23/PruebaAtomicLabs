import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'

export const Equip = () => {
  const [dataState, setDataState] = useState([])

  const getData = useCallback(async () => {
    try {
      const response = await fetch('https://murmuring-dawn-56703.herokuapp.com/names')
      const list  = await response.json()
      setDataState(list)

    } catch (error) {
      console.log(error);
    }
  }, [setDataState])

  useEffect(() => {
    
    if (dataState.length === 0) {
      getData();
    }
  }, [dataState])

  const renderItems = ({ item }) => {
    console.log(item)
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.avatar }} style={styles.img} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.job}>{item.position}</Text>
      </View>
    )
  }


  return (
    <View>
      {dataState.length > 0 && (
        <FlatList
          keyExtractor={(item) => item.id}
          data={dataState}
          renderItem={renderItems}
        />
      ) }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00609C',
    width: 300,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  img: {
    width: 100, 
    height: 100,
    marginTop: 10,
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
  job: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff'
  }
})