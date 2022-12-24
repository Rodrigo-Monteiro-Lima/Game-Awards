import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VoteScreen from '../screens/VoteScreen';
import WinnerScrenn from '../screens/WinnerScrenn';

const { Screen, Navigator } = createBottomTabNavigator();

const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name='Votes' component={VoteScreen}/>
      <Screen name='Winner' component={WinnerScrenn}/>
    </Navigator>
  )
}

export default StackRoutes;