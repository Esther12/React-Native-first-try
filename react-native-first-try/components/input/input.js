import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import List from './list';
import Form from "./form"


function Input() {
  const [ outputText, setOutputText] = useState([]);
  const [ enteredGoal, setEnteredGoal] = useState("");
  const getName = (enteredText)=>{      
      setEnteredGoal(enteredText);
  }
  const checkInput = ()=>{
      console.log(enteredGoal);
      setOutputText(outputText => [...outputText,{id : Math.random().toString(),val : enteredGoal}]);
      console.log(outputText);
  }
  const removeGoal = goalId => {
    setOutputText(outputText => {
          return outputText.filter((goal) => goal.id !== goalId);
      });
      console.log("Deleting : ",  goalId);
  }
  return (
    <View style={styles.container}>
        <Form 
        getName = {getName} 
        enteredGoal = {enteredGoal} 
        checkInput = {checkInput}/>

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