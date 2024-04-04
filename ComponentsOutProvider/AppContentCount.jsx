import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { CountExercises } from "../ExerciseList/CountExercises";
import { View } from "react-native";

const AppCountExercises = ()=>{
    const{
        exercises
    } = React.useContext(GlobalContext)

    return(
        <View>
            {exercises.length >= 1 && (
                <CountExercises/>
            )}
        </View>
    )
}

export {AppCountExercises}