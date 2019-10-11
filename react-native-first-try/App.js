import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Input from "./components/input/input";
import FlexBox from "./components/flexBox";

export default function App() {
  const [ outputText, setOutputText] = useState("Esther is coming!!");
  return (
    <View style={styles.container}>
      <Input/>
      {/* <FlexBox/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text : {
    color : "#8792df",
    fontSize : 30,
  }
});
