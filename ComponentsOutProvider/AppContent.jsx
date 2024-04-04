import React from "react";
import { CreateExercise } from "../CreateExercise/CreateExercise";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { GlobalContext } from "../GlobalContext/GlobalContext";

import { StyleSheet, View  } from "react-native";

function AppContent() {
    const { modalVisible } = React.useContext(GlobalContext);
  
    return (
      <View style={styles.container}>
        <CreateExercise />
        {modalVisible && (
          <ExerciseForm/>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export {AppContent}