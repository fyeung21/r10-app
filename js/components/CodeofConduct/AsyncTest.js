import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import models from '../../config/models'

export const AsyncStorage = () => {
    const [answer, setAnswer] = useState()
    useEffect(() => {
        (async () => {
            await models.storeData('fave', '8')
            const response = await models.getData('fave')
            setAnswer(response)
        })()
    }, [])
    return (
        <View>
            <Text>AsyncStorage</Text>
            <Text>My fav is: {answer}</Text>
            <Text>{getFaves}</Text>
        </View>
    )
}