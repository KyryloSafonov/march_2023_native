import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RoutersNames} from '../routersNames';
import {UserNavigationProps} from '../routersNames/types';

export const Users: FC = () => {
  const {navigate} = useNavigation<UserNavigationProps>();

  const [users, setUsers] = useState<any[]>([]);

  const navigateToUserPosts = (userId: number, userName: string) =>
    navigate(RoutersNames.USER_POSTS, {userId, userName});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUsers(res));
  }, []);

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text>Users</Text>
      {!!users.length && (
        <FlatList
          style={{
            width: '100%',
          }}
          data={users}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                width: '100%',
                backgroundColor: 'pink',
              }}
              key={item.id}>
              <TouchableOpacity
                onPress={() => navigateToUserPosts(item.id, item.name)}>
                <Text>
                  {item.id} --- {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};
