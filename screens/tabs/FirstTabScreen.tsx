import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const FirstTabScreen: FC = () => {
  const {goBack} = useNavigation<any>();

  return (
    <View>
      <Text>First tab screen</Text>
      <Button title={'go back'} onPress={goBack} />
    </View>
  );
};
