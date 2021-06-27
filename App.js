import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Button,ScrollView,FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const[isVisible, setIsVisible] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsVisible(false);
  };

  const removeGoalHAndler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHAndler = () => {
    setIsVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="ADD EM GOAL" onPress = {() => setIsVisible(true)}/>
      <GoalInput visible = {isVisible} onAddGoal={addGoalHandler} onCancel = {cancelGoalAdditionHAndler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id = {itemData.item.id}  onDelete = {removeGoalHAndler}  title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
