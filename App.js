import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TaskItem from './components/taskItem';
import AddTask from './components/addTask';

export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'milk', key: '1'},
    { text: 'oranges', key: '2'},
    { text: 'bread', key: '3'},
  ]);
  
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
  };

  return (
    <View style={styles.container}>
      <Header />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
