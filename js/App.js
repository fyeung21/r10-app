import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import client from "./config/api";
import AboutContainer from './screens/About';

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text>hello</Text>
              <AboutContainer />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ApolloProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
