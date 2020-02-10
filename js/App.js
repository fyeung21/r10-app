import React from 'react'
import { StatusBar } from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import client from "./config/api"
import AppNavigator from "./navigation/RootStackNavigator"
import FavesProvider from './context/FavesContext/FavesContext'

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <FavesProvider>
          <StatusBar barStyle="light-content" />
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    </>
  )
}

export default App
