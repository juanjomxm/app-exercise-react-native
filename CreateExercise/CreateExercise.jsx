import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { View, Button} from "react-native";

const CreateExercise = ()=>{
    const{
        setModalVisible
    } = React.useContext(GlobalContext)
    return(
        <View style={{ justifyContent: 'center'}}>
            <Button
            title="Agregar ejercicio"
            onPress={()=>{
                setModalVisible(state => !state)
            }}
            />
        </View>
    )
}

export {CreateExercise}