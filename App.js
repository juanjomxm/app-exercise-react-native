import React from 'react';

import { ExerciseProvider } from './GlobalContext/GlobalContext';
import { CreateExercise } from './CreateExercise/CreateExercise';
import { AppContent } from './ComponentsOutProvider/AppContent';

import { ContainerExercise } from './ExerciseList/ContainerExercises';
import { AppCountExercises } from './ComponentsOutProvider/AppContentCount';
import { AppContentList } from './ComponentsOutProvider/AppContentListExercises';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ExerciseProvider>
      <View style={styles.container}>
        {/* Componente que contiene el modal */}
        <AppContent/>

        <View>
          <ContainerExercise>
            <CreateExercise />
            <AppCountExercises/>
            <AppContentList/>
          </ContainerExercise>
        </View>
      </View>
    </ExerciseProvider>
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
