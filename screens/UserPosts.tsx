import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {UserPostsRouteProps} from '../routersNames/types';
import {RoutersNames} from '../routersNames';

export const UserPosts: FC = () => {
  const {params} = useRoute<UserPostsRouteProps<RoutersNames.USER_POSTS>>();

  const {userId, userName} = params;

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(res => res.json())
      .then(res => setPosts(res));
  }, [userId]);

  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{userName}`s Posts</Text>
      {!!posts.length && (
        <FlatList
          style={{
            width: '100%',
          }}
          data={posts}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                width: '100%',
                backgroundColor: 'pink',
              }}
              key={item.id}>
              <Text>
                {item.id} --- {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
