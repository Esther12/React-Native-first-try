import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import List from './list';
import Form from "./form"


function Input() {
  const [ outputText, setOutputText] = useState([]);
  const [ enteredGoal, setEnteredGoal] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const getName = (enteredText)=>{      
      setEnteredGoal(enteredText);
  }
  const checkInput = ()=>{
      console.log(enteredGoal);
      setOutputText(outputText => [...outputText,{id : Math.random().toString(),val : enteredGoal}]);
      console.log(outputText);
      setEnteredGoal("");
      setIsAddMode(false);
  }
  const removeGoal = goalId => {
    setOutputText(outputText => {
          return outputText.filter((goal) => goal.id !== goalId);
      });
      console.log("Deleting : ",  goalId);
  }
  const cancelGoal = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.container}>
      <Button title = "Add New Goal" onPress={()=> setIsAddMode(true)}></Button>
        <Form 
        visible = {isAddMode}
        getName = {getName} 
        enteredGoal = {enteredGoal} 
        checkInput = {checkInput}
        onCancel = {cancelGoal}
        />

      <FlatList 
            keyExtractor = {(item, index) => item.id}
            data = {outputText} 
            renderItem = {itemData => (
            <List 
            title = {itemData.item.val} 
            id = {itemData.item.id}
            onDelete = {removeGoal}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        padding: 10
    },
    
    text : {
        color : "#8792df",
        fontSize : 30,
    },
    
});

export default Input;