import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import client from "./config/api";
import AppNavigator from "./navigation/RootStackNavigator";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        {/* <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View> */}
        <AppNavigator />
        {/* </View>
          </ScrollView>
        </SafeAreaView> */}
      </ApolloProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  }
});

export default App;
