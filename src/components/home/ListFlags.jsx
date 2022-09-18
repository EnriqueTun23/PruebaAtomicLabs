import React, { useRef, useState } from 'react'
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

import slides from '../../service/data';


const { width, height } = Dimensions.get('window');

const viewConfigRef = { viewAreaCoveragePercentThreshold: 84 }

export const ListFlags = () => {

  let flatListRef = useRef();


  const [currentIndex, setCurrentIndex] = useState(0)

  const onViewRef = useRef(({changed}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  })

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index })
  }

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity 
        onPress={() => console.log('click')}
        activeOpacity={1}
      >

        <View style={styles.titleContainer}>
          <Image 
            source={item.img} 
            style={{ width: 200, height: 200}} 
          />
          <View style={styles.line}>
            <View style={styles.lineLarge} />
            <View style={styles.lineMiddle} />
            <View style={styles.lineLarge} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <FlatList
              style={{ width: 250,}}
              data={item.points} 
              renderItem={({ item }) => <Text style={styles.item}> • {item}</Text>}
            />
          </View>
        </View>

      </TouchableOpacity>
    )
   }

  return (
    <View style={styles.container}>
      <FlatList 
        data={slides}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}

        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotView}>
        {slides.map(({}, index) => (
          <TouchableOpacity key={index.toString()}
            style={[styles.circle, { backgroundColor: index == currentIndex ? '#FA4D09' : '#fff'}]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  carousel: {
    maxHeight: 500
  },
  titleContainer: {
    width: 280,
    height: 950,
    backgroundColor: '#FA4D09',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  title: {
    textAlign: 'right',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  line: {
    marginTop: 10,
    width: 160,
    height: 5,
    flex: 1,
    flexDirection: 'row',
  },
  lineLarge: {
    backgroundColor: '#fff',
    height: 3,
    width: 55,
    marginHorizontal: 5
  },
  lineMiddle: {
    backgroundColor: '#fff',
    height: 3,
    width: 30,
  },
  item: {
    marginTop: 15,
    color: '#fff',
    fontSize: 20
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginHorizontal:5
  }
})