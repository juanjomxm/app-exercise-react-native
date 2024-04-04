import React from 'react';

import { ExerciseProvider } from './GlobalContext/GlobalContext';
import { AppContent } from './ComponentsOutProvider/AppContent';

import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <ExerciseProvider>
      <View style={styles.container}>
        <AppContent/>
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
