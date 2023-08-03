import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity ,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import ProductDetail from '../../Screens/ProductDetail';
const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json)
      });
  };

  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      
      <FlatList data={products}
        renderItem={({ item, index }) => {
    
          return (
      
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.productItem}
               onPress={() => {
                  navigation.navigate('ProductDetail',{data:item});
              }} 
             
              >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View>
                <Text style={styles.name}>
                  {item.title.length > 25
                    ? item.title.substring(0, 25) + '...'
                    : item.title}
                </Text>
                <Text style={styles.desc}>
                  {item.description.length > 30 ?
                    item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
                <Text style={styles.price}>
                  {'$' + item.price}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    productItem: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name:
  {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc:
  {
    marginLeft: 20,
  },
  price:
  {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
    marginLeft: 20,
    marginTop: 5,
  },

});
