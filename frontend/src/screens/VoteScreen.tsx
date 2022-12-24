import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { clientGetGames } from '../api/api';
import GameCard from '../components/Votes/GameCard';
import Header from '../components/Votes/Header';

const VoteScreen = () => {
  const [gameList, setGameList]=useState([{}])

   useEffect(()=>{

     (async () => {
       const results =  await clientGetGames();
       setGameList(results);

       console.log(results);

     })();

   },[])
  return (
    <View style={styles.container}>
      <Header/>

      <ScrollView style={styles.gameArea}>
        {gameList.map(game => GameCard(game))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameArea:{
    flex:1,
    paddingTop:10,
    paddingBottom: 20,
    width:'100%'
  }
});

export default VoteScreen;