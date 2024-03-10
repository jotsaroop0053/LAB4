import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return; 
    }
    addTask(taskText);
    setTaskText(''); 
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', 
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
});

export default ToDoForm;