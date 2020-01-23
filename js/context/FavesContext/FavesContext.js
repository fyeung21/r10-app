import React from 'react';
import { useEffect, useContext, useState } from "react";

const FavesProvider = ({ children }) => {
    const FavesProviderContext = useContext(FavesProviderContext);

    const [faveIds, setFaveIds] = useState([])

    const addFaveIds = () => {
        setFaveIds([...faveIds])
    }

    useEffect(() => {
        (async () => {
            await models.storeData('fave', '8');
            const response = await models.getData('fave');
            setAnswer(response);
        })
    }, [])

    // addFaveSession({sessionId}) => {

    // }

    // removeFaveSession({sessionId}) => {

    // }

    // Add addFaveSession removeFavesession methods to provider. methods should have a sessionId param

    return (
        <FavesContext.Provider value={addFaveIds}>
            {children}
        </FavesContext.Provider>
    );

}
export default FavesProvider;