import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewHome({ navigation }) {
    
    const [reviews, setReviews] = useState([
        { title: 'Great', rating: 5, body: 'qwert', key: '1'},
        { title: 'Good', rating: 4, body: 'asdf', key: '2'},
        { title: 'better', rating: 3, body: 'zxcv', key: '3'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
