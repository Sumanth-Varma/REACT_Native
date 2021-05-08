import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const OpenMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/task-back.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={OpenMenu} style={styles.icon} />
            <View style={styles.headerTitle} >
                <Image source={require('../assets/task-logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '104%',
        height: '104%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'merriweather-bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: 'white'
    },
    headerTitle: {
        flexDirection: 'row',
    }, 
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});