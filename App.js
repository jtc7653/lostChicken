import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  const [highScore, setHighScore] = useState(0)
  useEffect(() => {
    setRunning(false)
  }, [])
  return (
    <View style={{flex: 1}}>
      <GameEngine        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10, justifyContent: 'flex-start'}}
          onPress={() => {
          }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
            Left Jump
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10,justifyContent: 'flex-end'}}
          onPress={() => {
          }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
            Right Jump
          </Text>
        </TouchableOpacity>
      <StatusBar style="auto" hidden = {true} />
      </GameEngine>
    </View>
  );
}

const styles = ({
  container: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
    flexDirection:"row"
  }
});
