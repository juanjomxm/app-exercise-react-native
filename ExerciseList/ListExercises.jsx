import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const ListExercises= (props)=>{
  const textStyle = props.completed ? [styles.text, styles.completedText] : styles.text;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => props.onCompleted(props.text)}
      >
        <Text style={textStyle}>{props.text}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => props.onDeleted(props.text)}
      >
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  text: {
    fontSize: 16,
    textDecorationLine: "none"
  },
  completedText: {
    color: "red",
    textDecorationLine: "line-through"
  },
  deleteButton: {
    fontSize: 16,
    color: "blue",
    marginLeft: 10
  }
})

export { ListExercises }