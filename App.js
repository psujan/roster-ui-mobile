import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RosterScreen from './screens/RosterScreen'
import RosterDetailScreen from './screens/RosterDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Roster" component={RosterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Roster Detail" component={RosterDetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="Leave" component={ProfileScreen} />
        <Stack.Screen name="ApplyLeave" component={ProfileScreen} />
        <Stack.Screen name="Availability" component={ProfileScreen} />
        <Stack.Screen name="History" component={ProfileScreen} />
        <Stack.Screen name="Issues" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
