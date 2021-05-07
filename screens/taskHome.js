import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import TaskItem from '../components/taskItem';
import AddTask from '../components/addTask';

export default function TaskHome({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const pressHandler = (key) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.key != key);
    });
  };

  const submitHandler = (text) => {

    if (text.length > 2) {
      setTasks((prevTasks) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTasks
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Tasks Must be over 2 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <AddTask submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TaskItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  },
});
