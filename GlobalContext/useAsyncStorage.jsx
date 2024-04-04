import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (itemName, initialValue)=>{
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(()=>{
        const fetchData = async () => {
            try {
              const storedItem = await AsyncStorage.getItem(itemName)
      
              if (storedItem === null) {
                await AsyncStorage.setItem(itemName, JSON.stringify(initialValue))
                setItem(initialValue)
              } else {
                setItem(JSON.parse(storedItem))
              }
      
              setLoading(false)
            } catch (error) {
              setError(true)
              setLoading(false)
            }
        }
      
          fetchData()
    }, [])

    const saveExercises = async (newItem) => {
        try {
          await AsyncStorage.setItem(itemName, JSON.stringify(newItem))
          setItem(newItem)
        } catch (error) {
          setError(true)
        }
    }

    return {
        item, 
        saveExercises, 
        loading, 
        error
    }
}

export {useAsyncStorage}