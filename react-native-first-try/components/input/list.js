import React, { PureComponent } from 'react';
import {  Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const List = props =>{
    console.log(props);
    return(
    <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)}>
        <View style = { styles.outputList}>
                <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
    
}
    
const styles = StyleSheet.create({
    outputList : {
        padding: 10,
        backgroundColor : "#ccc",
        marginVertical :  10,
        color : "#fff"
    }
});
export default List;
