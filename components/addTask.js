import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddTask({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.parent}>
            <TextInput 
                style={styles.input}
                placeholder='Add tasks...'
                onChangeText={changeHandler}
            />
            <AntDesign name="plus" size={24} color="black" onPress={() => submitHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 80,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
})