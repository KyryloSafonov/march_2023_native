/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens/Home';
import {Users} from './screens/Users';
import {UserPosts} from './screens/UserPosts';
import {RoutersNames} from './routersNames';
import {MainTab} from './screens/tabs/MainTab';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
        initialRouteName={RoutersNames.HOME}>
        <Stack.Screen name={RoutersNames.HOME} component={Home} />
        <Stack.Screen name={RoutersNames.USERS} component={Users} />
        <Stack.Screen name={RoutersNames.USER_POSTS} component={UserPosts} />
        <Stack.Screen name={RoutersNames.MAIN_TAB} component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
