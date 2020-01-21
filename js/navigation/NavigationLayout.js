import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
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

const TabNavigator = createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         //     let IconComponent = Ionicons;
        //         //     let iconName;
        //         //     if (routeName === 'Home') {
        //         //         iconName = focused
        //         //             ? 'ios-information-circle'
        //         //             : 'ios-information-circle-outline';
        //         //         // Sometimes we want to add badges to some icons.
        //         //         // You can check the implementation below.
        //         //         IconComponent = HomeIconWithBadge;
        //         //     } else if (routeName === 'Settings') {
        //         //         iconName = focused ? 'ios-list-box' : 'ios-list';
        //         //     }

        //         //     // You can return any component that you like here!
        //         //     return <IconComponent name={iconName} size={25} color={tintColor} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 14
            },
            style: {
                backgroundColor: "black"
            }
        }
    }
);
export default TabNavigator;