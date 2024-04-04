import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { View, Text, Modal, Button} from "react-native";

const CreateExercise = ()=>{
    const{
        setModalVisible
    } = React.useContext(GlobalContext)
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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