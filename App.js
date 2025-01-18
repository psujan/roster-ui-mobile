import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RosterScreen from "./screens/RosterScreen";
import RosterDetailScreen from "./screens/RosterDetailScreen";
import AvailabilityScreen from "./screens/AvailabilityScreen";
import RosterHistoryScreen from "./screens/RosterHistoryScreen";
import LeaveScreen from "./screens/LeaveScreen";
import RosterIssueScreen from "./screens/RosterIssueScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Roster"
          component={RosterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Roster-Detail"
          component={RosterDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Leave"
          component={LeaveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApplyLeave"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Availability"
          component={AvailabilityScreen}
          option={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={RosterHistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Issues"
          component={RosterIssueScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
