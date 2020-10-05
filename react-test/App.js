import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, AccessibilityInfo } from 'react-native';
import {VictoryLine, VictoryChart, VictoryTooltip, VictoryVoronoiContainer, VictoryLabel } from 'victory-native';

export default class App extends Component{

  handleClick = () => {
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <StatusBar style="auto" />

        <VictoryChart domainPadding={{ y: 10 }}
          containerComponent={
            <VictoryVoronoiContainer name="test"
              labels={({ datum }) => `${datum.x}, ${datum.y}`}
            />
          }>

          <VictoryLine
            y={(datum) => 2* datum.x + 5}
            
          />
        </VictoryChart>

        <Button
          onPress={this.handleClick}
          title="Test"
          color="#841584"
          accessibilityLabel=""
        ></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
