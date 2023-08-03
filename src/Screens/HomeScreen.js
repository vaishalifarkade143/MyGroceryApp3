import { Text, View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Common/Header';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Heart from './tabs/Heart';
import User from './tabs/User';
import Bell from './tabs/Bell';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>

      {/* header */}

      {/* <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'Grocery App'}
      /> */}

      {selectedTab == 0 ?
        (<Home />)
        :
        selectedTab == 1 ?
          (<Search />)
          :
          selectedTab == 2 ?
            (<Bell />)
            :
            selectedTab == 3 ?
              (<Heart />)
              :
              (<User />)
      }

        <View style={styles.bottomView}>

        <TouchableOpacity style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image source={
             selectedTab == 0
             ? require('../images/home_fill.png')
             :
            require('../images/home.png')
          }
            style={styles.bottomTabIcon}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image source={require('../images/search.png')}
            style={styles.bottomTabIcon}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image source={
            selectedTab == 2
            ? require('../images/bell_fill.png')
            :
            require('../images/bell.png')
          }
            style={styles.bottomTabIcon}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image source={
            selectedTab == 3
            ? require('../images/heart_fill.png')
            :
            require('../images/heart.png')
          }
            style={styles.bottomTabIcon}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../images/user_fill.png')
                :
                require('../images/user.png')
            }
            style={styles.bottomTabIcon}></Image>
        </TouchableOpacity>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  bottomTab: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomTabIcon: {
    width: 25,
    height: 25,

  }


});

export default HomeScreen;



