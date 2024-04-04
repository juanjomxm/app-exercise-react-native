import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { View, TextInput, Button, Modal } from "react-native";

const ExerciseForm = ()=>{
    const{
        addExercise,
        modalVisible,
        setModalVisible
    } = React.useContext(GlobalContext)

    const [newExerciseValue, setNewExerciseValue] = React.useState("");

    const onSubmit = () => {
      addExercise(newExerciseValue);
      setModalVisible(false);
    };
  
    const onCancel = () => {
        setModalVisible(false);
    };
  
    return (
      <View style={{ padding: 20 }}>

        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    
                    <View style={{ backgroundColor: 'black', padding: 20}}>
                        <TextInput
                        style={{ height: 100, width: 200, borderColor: "gray", borderWidth: 1, marginBottom: 20, textAlign: 'center' }}
                        placeholder="Inicia tu rutina"
                        multiline={true}
                        value={newExerciseValue}
                        onChangeText={setNewExerciseValue}
                        />
                        
                        <View>
                            <Button title="Cancelar" onPress={onCancel} />
                            {/* <Button title="Agregar" onPress={onSubmit} /> */}
                        </View>

                        <View style={{marginTop:5}}>
                            {/* <Button title="Cancelar" onPress={onCancel} /> */}
                            <Button title="Agregar" onPress={onSubmit} />
                        </View>
                    </View>
                </View>
        </Modal>
         {/* Asi es la manera de abrir un modal en react native */}
      </View>
    );
}

export {ExerciseForm}