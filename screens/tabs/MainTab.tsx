import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FirstTab} from './FirstTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstTabScreen} from './FirstTabScreen';
import {SecondTab} from './SecondTab';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

enum TABS {
  FIRST_TAB_SCREENS = 'FirstTabScreens',
  SECOND = 'Second',
}

export enum FIRST_TAB_SCREENS {
  FIRST = 'First',
  FIRST_SCREEN = 'FirstScreen',
}

const FirstTabScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={FIRST_TAB_SCREENS.FIRST}>
      <Stack.Screen component={FirstTab} name={FIRST_TAB_SCREENS.FIRST} />
      <Stack.Screen
        component={FirstTabScreen}
        name={FIRST_TAB_SCREENS.FIRST_SCREEN}
      />
    </Stack.Navigator>
  );
};

export const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={TABS.FIRST_TAB_SCREENS}>
      <Tab.Screen component={FirstTabScreens} name={TABS.FIRST_TAB_SCREENS} />
      <Tab.Screen component={SecondTab} name={TABS.SECOND} />
    </Tab.Navigator>
  );
};
