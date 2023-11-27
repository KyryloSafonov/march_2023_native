/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const App: FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setUsers(res);
      });
  }, []);

  const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setPosts(res));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollBlock}>
        {users.map(item => (
          <View key={item.id}>
            <Text>
              {item.id} --- {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <TouchableHighlight style={styles.button} onLongPress={getPosts}>
          <Text>Get posts</Text>
        </TouchableHighlight>
      </View>
      <View>
        {!!posts.length && (
          <FlatList
            style={styles.flatList}
            data={posts}
            renderItem={({item}) => (
              <View>
                <Text>
                  {item.id} --- {item.title}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  scrollBlock: {
    height: 30,
    flexDirection: 'column',
    gap: 20,
  },
  flatList: {
    height: '80%',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 15,
  },
});

export default App;
