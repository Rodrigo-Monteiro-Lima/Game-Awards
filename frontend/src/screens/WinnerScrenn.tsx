import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const WinnerScrenn = () => {
  return (
    <View style={styles.container}>
      <Text>
        WinnerScrenn
      </Text>
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
