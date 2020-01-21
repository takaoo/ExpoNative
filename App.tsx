import React from 'react';
import { StyleSheet, View, Alert, Switch, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Text>こんnにちは</Text>
      <Switch
        ios_backgroundColor="#f0f"
        onValueChange={() => Alert.alert('switch')}
        thumbColor="#12f"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
