import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FIRST_TAB_SCREENS} from './MainTab';

export const FirstTab: FC = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View>
      <Text>First tab</Text>
      <Button
        title={'go to first tab screen'}
        onPress={() => navigate(FIRST_TAB_SCREENS.FIRST_SCREEN)}
      />
    </View>
  );
};
