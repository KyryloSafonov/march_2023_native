import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RoutersNames} from '../routersNames';

export const Home: FC = () => {
  const {navigate} = useNavigation<any>();

  const navigateToUsersScreen = () => navigate(RoutersNames.USERS);

  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title={'Go to users screen'} onPress={navigateToUsersScreen} />
    </View>
  );
};
