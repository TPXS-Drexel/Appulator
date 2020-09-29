import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {VictoryLine, VictoryChart, VictoryLabel } from 'victory-native';

function arrowRight(){
  alert("Working");
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <StatusBar style="auto" />
      <VictoryChart>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "2px solid #ccc"}
          }}
          interpolation="natural"
          domain={{x: [-5, 5], y: [-5, 5]}}
          data={[
            { x: -2, y: -2 },
            { x: -1, y: 2 },
            { x: 0, y: 0 },
            { x: 1, y: -2 },
            { x: 2, y: 2 }
          ]}
        />
      </VictoryChart>

      <Button
        onPress={arrowRight()}
        title="Right"
        color="#808080"
        accessibilityLabel=""
      />

      <Button
        onPress={arrowRight()}
        title="Left"
        color="#808080"
        accessibilityLabel=""
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
