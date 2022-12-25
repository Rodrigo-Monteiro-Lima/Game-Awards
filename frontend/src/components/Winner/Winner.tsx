import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const Winner = () => {
  return (
    <View>
      <Image 
        source={{uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4tt2.png'}}
        style={styles.card} 
      />
      <Text style={styles.gameLabel}>STRAY</Text>
      <Text style={styles.winnerLabel}>WINNER</Text>
    </View>
  )
}

export default Winner;