import React from "react";
import {useAsyncStorage} from "./useAsyncStorage";

const GlobalContext = React.createContext()

const ExerciseProvider = ({children})=>{
  const {
      item: exercises,
      saveExercises,
      loading,
      error
  } = useAsyncStorage('work-fitnes', [])

  const [modalVisible, setModalVisible] = React.useState(false) // Para abrir el portal de manera manual seria cambiando el estado de un false a un true

    

  // ESTADOS DERIVADOS

  const completedExercise = exercises.filter(item => item.completed).length // Esto es un estado derivado, son variables, calculos etc, que hacemos a traves de un estado, tambien con el metodo filter le estoy diciendo que me devuelva los elementos que cumplan con la condicion
  const totalExercise = exercises.length
  const initExercise = exercises.filter(item => item)

  // Funcion para agregar el ejercicio
  const addExercise = (text)=>{
    const newExercise =[...exercises]
    newExercise.push({
      text,
      completed: false
    })
    saveExercises(newExercise)
  }

  // Al dar clik en esta funcion el ejercicio aparecera como completado
  const exerciseCompleted = (text)=>{
    const newExercise =[...exercises]
    const exerciseIndex = newExercise.findIndex((item) => item.text === text)
    newExercise[exerciseIndex].completed = true
    saveExercises(newExercise)
  }

  // Funcion para eliminar el ejercicio
  const deletedExercise = (text)=>{
    const newExercise = [...exercises]
    const exerciseIndex = newExercise.findIndex((item) => item.text === text)
    newExercise[exerciseIndex].completed = true
    newExercise.splice(exerciseIndex, 1)
    saveExercises(newExercise)
  }

  return(
    <GlobalContext.Provider value={{
        exercises,
        saveExercises,
        loading,
        error,
        modalVisible, 
        setModalVisible,
        initExercise,
        completedExercise,
        totalExercise,
        addExercise,
        exerciseCompleted,
        deletedExercise
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export  { GlobalContext }
export { ExerciseProvider }