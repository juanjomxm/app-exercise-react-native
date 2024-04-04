import React from 'react';

import { ExerciseProvider } from './GlobalContext/GlobalContext';
import { CreateExercise } from './CreateExercise/CreateExercise';
import { AppContent } from './ComponentsOutProvider/AppContentForm';

import { ContainerExercise } from './ExerciseList/ContainerExercises';
import { AppCountExercises } from './ComponentsOutProvider/AppContentCount';
import { AppContentList } from './ComponentsOutProvider/AppContentListExercises';

import { View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
    source={{uri: 'https://th.bing.com/th/id/OIG4..GlZ56tEM1ppWWkrMYfy?w=1024&h=1024&rs=1&pid=ImgDetMain'}}
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    resizeMode="cover"
    >
      <ExerciseProvider>
        <View>
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
    </ImageBackground>
  )
}
