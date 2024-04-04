import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { View, Text, StyleSheet } from "react-native";

const CountExercises = ()=>{
    const {
        completedExercise,
        totalExercise, // De esta manera estoy utilizando el react context de una manera mas comoda y eficaz a mi mode de ver, utilizando la herramienta React.useContext(), donde en la variable le indicamos los parametros a utilizar
    } = React.useContext(GlobalContext)

    return(
        <View>
            <Text>Has completado {completedExercise} de {totalExercise} ejercicios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export { CountExercises }
