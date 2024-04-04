import React from "react";
import { ExerciseForm } from "../ExerciseForm/ExerciseForm";
import { GlobalContext } from "../GlobalContext/GlobalContext";

import { View } from "react-native";

const AppContent = ()=>{
    const{
      modalVisible 
    } = React.useContext(GlobalContext);
  
    return (
      <View>
        {modalVisible && (
          <ExerciseForm/>
        )}
      </View>
    );
}

export {AppContent}