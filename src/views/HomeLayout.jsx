import React, {useState, useEffect} from 'react';
import Home from './Home';
import Contact from'./Contact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function getHeaderTitle(route) {

  const routeName = route.state ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Login';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Contact':
      return 'Contact';
  
  }
}
export default function HomeLayout({ navigation, route }){
  const Tab = createBottomTabNavigator();
  navigation.setOptions({ headerTitle: getHeaderTitle("Home") })
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name ) {
            case "Home":
                iconName = focused
                ? 'home'
                : 'home-outline';
              break;
              case "Contact":
                iconName = focused
                ? 'map'
                : 'map-outline';
              break;
            default:
              break;
          }
          if (route.name === 'Home') {
           
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
   
  )
}