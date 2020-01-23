import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, obj) => {
    try {
        let value = JSON.stringify(obj);
        const addFaveSession = await AsyncStorage.setItem(key, value);
        console.log(addFaveSession);
    } catch (e) {
        throw e;
    }
}

const getData = async (key) => {
    try {
        const user = await AsyncStorage.getItem(key);
        const displayUser = JSON.parse(user);
        return displayUser;
    } catch (e) {
        throw e;
    }
}

const deleteData = async (key) => {
    try {
        const removeFaveSession = await AsyncStorage.removeItem(key);
        console.log(removeFaveSession);
    } catch (e) {
        throw e;
    }
}

export default {
    storeData,
    getData,
    deleteData
}