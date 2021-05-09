import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>An APP where one can list their daily tasks to keep a record of
             what they are doing. More functions will be added to improve te performance of app. Please submit 
             reviews of performance of app so that we can develop a more smoother performance app.  </Text>
        </View>
    ) 
}
