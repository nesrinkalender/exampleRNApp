import * as React from 'react';
import { Text, View } from 'react-native';
import  Cards from "./Cards";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cards />
    </View>
  );
}

export default HomeScreen;