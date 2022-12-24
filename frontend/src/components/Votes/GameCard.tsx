import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const sendingVote = (id:number) => {
  Alert.alert(
    "Vote sent",
    "thanks for helping decide game of the year",
    [
      { text: "OK", onPress: () => clientSendingVotes(id) }
    ]
  )
};

const GameCard = () => {
  return (
    <View style={styles.Cardcontainer}>
      <View >
        <Image source={{uri: ''}} style={styles.card}/>
      </View>
      <View style={styles.infoContainer}>
          <Text style={styles.label}>Pacman</Text>
          <Button onPress={()=> sendingVote(props.id)} title='Vote' color='#9AC33CC'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Cardcontainer:{
    borderWidth:2,
    padding:10,
    borderBottomColor:'#fff',
    width:'100%',
    borderRadius:8,
    flexDirection: 'row',
    backgroundColor:'#404040'
  },
  card:{
    borderRadius:10,
    width: 200, 
    height: 300,
  },
  label:{
    fontSize:22,
    color:'white',
    paddingBottom:15,
    textAlign:'center',
  },
  infoContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    textAlign:'center',
    paddingTop:20,
  }
});

export default GameCard;
