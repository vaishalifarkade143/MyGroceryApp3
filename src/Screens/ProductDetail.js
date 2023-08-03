import {StyleSheet, Text,View,Image} from 'react-native'
import React from 'react'
import Header from '../Common/Header';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductDetail = () => {
  const navigation= useNavigation();
  const route = useRoute();
  return(
    <View style={ styles.container}>
      <Header leftIcon={require('../images/back.png')} 
      rightIcon={require('../images/cart.png')}
      title={'Product Details'}
      onClickLeftIcon={() => {
          navigation.goBack();
      }}
      />
      <Image source={{uri:route.params.data.image}} style = {styles.banner}/>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create(
  {
    container :
    {
      flex: 1,
    },
    banner:
    {
      width:'100%',
      height: 300
      
    }
  }
);