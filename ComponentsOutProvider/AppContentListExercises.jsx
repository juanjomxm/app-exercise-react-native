import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { ListExercises } from "../ExerciseList/ListExercises";
import { View, StyleSheet } from "react-native";

const AppContentList = ()=>{
    const{
        initExercise,
        exerciseCompleted,
        deletedExercise
    } = React.useContext(GlobalContext)

    return(
        <View>
            {initExercise.map(item => ( // Esta es la manera de trabajar con arrays, sus objetos y su manipulacion en react, despues de el componente, debemos indicar una key que concuerde con el objeto que se desea obtener. Al escribir el metodo para obetener el return no es en llaves si no en parentesis. Estoy ejecutando un estado derivado para poder filtrar el resultado que deseo
            <ListExercises
                key={item.text} 
                text={item.text} 
                completed={item.completed}
                onCompleted={() => exerciseCompleted(item.text)} // Se debe ejecutar como una funcion dentro de otra funcion para que no se rompa la aplicacion
                onDeleted={() => deletedExercise(item.text)} // Debo solucionar que al darle click no elimina el ejercicio seleccionado sino el primero de la lista
            />
            ))}
        </View>
    )
}

export { AppContentList }

