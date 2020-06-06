import 'react-native-gesture-handler';
import React , {Fragment} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from './views/Login';
import HomeLayout from './views/HomeLayout';
const Stack = createStackNavigator();
const routeActive = React.createContext();

function App() {
  const isLoged = false;
  return (
    <routeActive.Provider value={"home"}>
       <NavigationContainer>
        <Stack.Navigator >
          {! isLoged && (
            <Stack.Screen name="Login"
              component={Login} 
              options={{
              headerShown:false,
            }}
            />
          )}
          <Stack.Screen 
            name="HomeLayout"
            component={HomeLayout}
            options={()=>({
              title:"Home"
            } ) 
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </routeActive.Provider>
  );
}

export default App;
