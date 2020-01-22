import AsyncStorage from '@react-native-community/async-storage';

storeData = async () => {
    try {
        const addFaveSession = await AsyncStorage.setItem("key", "value");
    } catch (e) {
        throw e;
    }
    console.log(addFaveSession);
}

getData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
    } catch (e) {
        // error reading value
    }
    console.log(values);
}

storeData = async () => {
    try {
        const removeFaveSession = await AsyncStorage.removeItem("key");
    } catch (e) {
        throw e;
    }
    console.log(removeFaveSession);
}
