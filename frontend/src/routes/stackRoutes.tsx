import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VoteScreen from '../screens/VoteScreen';
import WinnerScrenn from '../screens/WinnerScrenn';

const { Screen, Navigator } = createBottomTabNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 2,
          paddingTop: 0,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}
    >
      <Screen 
      name='Votes' 
      component={VoteScreen}
      options={{
        tabBarLabel: 'Votar',
        tabBarActiveTintColor: 'white',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons 
            name='home'
            color='#6DFF60'
            size={size}
          />
        )
      }}
      />
      <Screen 
      name='Winner' 
      component={WinnerScrenn}
      options={{
        tabBarLabel: 'Result',
        tabBarActiveTintColor: 'white',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons 
            name='trophy'
            color='#6DFF60'
            size={size}
          />
        )
      }}
      />
    </Navigator>
  )
}

export default StackRoutes;