import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { clientGetWinner } from '../api/api';
import Winner from '../components/Winner/Winner';
import { gameInterface } from '../interfaces/gameInterface';

const WinnerScrenn = () => {
  const [game, setGame] = useState<gameInterface>({
    id: 0,
    name: "--",
    description: "--",
    cover: "",
    votes: 0,
  });

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const winner = await clientGetWinner();
        setGame(winner);
      })()
    }, [])
  );

  return (
    <View style={styles.container}>
      <Winner 
        name={game.name}
        cover={game.cover}
        votes={game.votes}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WinnerScrenn;
