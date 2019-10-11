import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

function flexBox() {
  const [ outputText, setOutputText] = useState("Esther is coming!!");
  return (
    <View style={styles.container}>
        <View style={styles.red}>
            <Text>1</Text>
        </View>
        <View style = {styles.green}>
        <Text>2</Text>
        </View>
        <View style = { styles.yellow}>
        <Text>3</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection : "row",
      width : "80%",
      height : 100,
      justifyContent : "space-around",
      alignItems : "stretch"
  },
  red : {
      backgroundColor : "red",
      flex : 1,
      justifyContent : "center",
      alignItems : "center"
  },
    green : {
        backgroundColor : "green",
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    yellow : {
        backgroundColor : "yellow",
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }

});

export default flexBox;