import React from 'react';
import {  TextInput, View, StyleSheet, Button, Modal } from 'react-native';

const Form = props =>{
    const inputArea = val =>{
        props.getName(val);
    }
    // const [ enteredGoal, setEnteredGoal] = useState("");
    // const getName = (enteredText)=>{      
    //     setEnteredGoal(enteredText);
    // }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder = "Insert Your Name :"
                onChangeText={inputArea}
                value = {props.enteredGoal}
                ></TextInput>
                <Button title = "ADD" onPress = {props.checkInput}></Button>
                <Button title = "CANCEL" color = "red" onPress = {props.onCancel}></Button>
            </View>
        </Modal>
    )
    
}
    
const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
    input : {
        borderBottomColor : "black",
        borderBottomWidth: 1,
        width : "80%"
    },
});
export default Form;
