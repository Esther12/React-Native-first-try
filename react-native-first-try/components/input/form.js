import React, { PureComponent } from 'react';
import {  TextInput, View, StyleSheet, Button } from 'react-native';

const Form = props =>{
    const inputArea = val =>{
        props.getName(val);
    }
    // const [ enteredGoal, setEnteredGoal] = useState("");
    // const getName = (enteredText)=>{      
    //     setEnteredGoal(enteredText);
    // }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder = "Insert Your Name :"
            onChangeText={inputArea}
            value = {props.enteredGoal}
            ></TextInput>
            <Button title = "ADD" onPress = {props.checkInput}></Button>
        </View>
    )
    
}
    
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    input : {
        borderBottomColor : "black",
        borderBottomWidth: 1,
        width : "80%"
    },
});
export default Form;
