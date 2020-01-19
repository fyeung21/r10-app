import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import FavesScreen from '../screens/Faves';

const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen
});
const MapStack = createStackNavigator({
    Map: MapScreen
});
const FavesStack = createStackNavigator({
    Faves: FavesScreen
});
const AboutStack = createStackNavigator({
    About: AboutScreen
});

const TabNavigator = createBottomTabNavigator({
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
});
export default TabNavigator;