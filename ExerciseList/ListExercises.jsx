import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button} from "react-native";

const ListExercises= (props)=>{
  const textStyle = props.completed ? [styles.text, styles.completedText] : styles.text;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => props.onCompleted(props.text)}
      >
        <Text style={textStyle}>{props.text}</Text>
      </TouchableOpacity>

      <Button 
        style={styles.deleteButton}
        title="X"
        onPress={() => props.onDeleted(props.text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    width: 200,
    marginTop: 20,
    marginLeft: 50
  },
  text: {
    fontSize: 20,
    textDecorationLine: "none",
  },
  completedText: {
    color: "blue",
    textDecorationLine: "line-through"
  },
})

export { ListExercises }