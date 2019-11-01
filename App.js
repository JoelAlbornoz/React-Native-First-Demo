import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import { clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  }
  const cancelInputHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancelGoal={cancelInputHandler}/>
      <FlatList data={courseGoals} renderItem = {itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {padding: 50}
});
