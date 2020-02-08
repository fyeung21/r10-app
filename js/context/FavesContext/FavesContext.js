import React, { createContext } from 'react';
import { useEffect, useContext, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';

const FavesContext = createContext();

const FavesProvider = ({ children }) => {
    // const FavesProviderContext = useContext(FavesProviderContext);

    const [faveIds, setFaveIds] = useState(false)

    const displayFaves = async () => {
        const getFaveKeys = await getFaves()
        setFaveIds(getFaveKeys)
    }

    useEffect(() => {
        displayFaves()
    }, [])

    const getFaves = async () => {
        const allKeys = await AsyncStorage.getAllKeys();
        const results = await AsyncStorage.multiGet(allKeys);

        return results.filter(item => item[1] === 'true').map(item => item[0]);
    }

    addFaveSession = async sessionId => {
        try {
            await AsyncStorage.setItem(sessionId, 'true');
        } catch (e) {
            console.log(e);
        }
        displayFaves()
    }

    removeFaveSession = async sessionId => {
        try {
            await AsyncStorage.setItem(sessionId, 'false');
        } catch (e) {
            console.log(e);
        }
        displayFaves()
    }

    getFaveSession = async sessionId => {
        try {
            return 'true' === await AsyncStorage.getItem(sessionId);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <FavesContext.Provider value={{ faveIds, addFaveSession, removeFaveSession }}>
            {children}
        </FavesContext.Provider>
    );

}
export { FavesContext };
export default FavesProvider;