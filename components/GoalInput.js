import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal  visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
            <TextInput value={enteredGoal} onChangeText={goalInputHandler} placeholder="Course Goal" style={styles.textInput} />
        
        <View style={styles.buttonsRow}>
            <View style={{width: "40%"}}><Button title="Add"  onPress={addGoalHandler}/></View>
            <View style={{width: "40%"}}><Button title="Cancel" color="red" onPress={props.onCancelGoal} /></View>
        </View>
        </View>
        </Modal>
        )
}

styles = StyleSheet.create({
    inputContainer: {flex: 1, justifyContent: "center", alignItems: "center" },
    textInput: { width: "80%", borderBottomColor: "black", borderWidth: 1 },
    buttonsRow: {flexDirection:"row", justifyContent:"space-around", width:"85%", marginTop: 10 }
})

export default GoalInput;