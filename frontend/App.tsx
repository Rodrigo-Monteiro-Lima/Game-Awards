import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VoteScreen from './src/screens/VoteScreen';


export default function App() {
  return (
    <VoteScreen></VoteScreen>
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
