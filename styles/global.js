import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        fontFamily: 'girassol-regular'
    },
    titleText: {
        fontFamily: 'merriweather-bold',
        fontSize: 18,
        color: '#333'
    },
    title: {
        fontFamily: 'merriweather-italic',
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'girassol-regular'
    }
  });