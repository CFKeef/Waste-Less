import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from "./store";
import Login from './src/scenes/login/login.js';
import Dashboard from './src/scenes/dashboard/dashboard.js';
import Register from './src/scenes/register/register.js';
import Recover from './src/scenes/recover/recover.js';
import LinkSent from './src/scenes/LinkSent/LinkSent.js';
import ChangePassword from './src/scenes/ChangePassword/ChangePassword.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Dashboard"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Recover" component={Recover} />
          <Stack.Screen name="LinkSent" component={LinkSent} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}