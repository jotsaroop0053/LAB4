import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === '') {
      return; 
    }
    if (tasks.includes(taskText)) {
      alert('Task already exists!');
      return; 
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.task}>{task}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tasksContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  taskContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  task: {
    fontSize: 18,
  },
});
