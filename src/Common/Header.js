import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');
const Header = ({ title,
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon
}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    onClickLeftIcon();
                }} >
                <Image source={leftIcon} style={styles.icon}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity style={styles.btn}>
                <Image source={rightIcon} style={[styles.icon, { width: 50, height: 50 }]}></Image>
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 60,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    },
    title: {
        color: '#fff',
        fontSize: 20,

    }
});