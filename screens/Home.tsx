import React, {FC} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RoutersNames} from '../routersNames';

export const Home: FC = () => {
  const {navigate} = useNavigation<any>();

  const navigateToUsersScreen = () => navigate(RoutersNames.USERS);
  const navigateToTabsScreen = () => navigate(RoutersNames.MAIN_TAB);

  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <Image
        style={{
          height: 150,
          width: 150,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        }}
      />
      <Button title={'Go to users screen'} onPress={navigateToUsersScreen} />
      <Button title={'Go to tabs'} onPress={navigateToTabsScreen} />
    </View>
  );
};
