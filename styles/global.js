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

  export const images = {
      ratings: {
          '1': require('../assets/rating-1.png'),
          '2': require('../assets/rating-2.png'),
          '3': require('../assets/rating-3.png'),
          '4': require('../assets/rating-4.png'),
          '5': require('../assets/rating-5.png'), 
      } 
  };